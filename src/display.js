const i2cBus = require("i2c-bus");

const bankAddress = 0xfd;
const shutdownRegister = 0x0a;
const configBank = 0x0b;
const audiosyncRegister = 0x06;
const modeRegister = 0x00;
const frameRegister = 0x01;
const pictureMode = 0x00;
const colorOffset = 0x24;
const ledGamma = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7,
  7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15,
  15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25,
  26, 27, 27, 28, 29, 29, 30, 31, 31, 32, 33, 34, 34, 35, 36, 37, 37, 38, 39,
  40, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76,
  77, 78, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 91, 93, 94, 95, 96, 98, 99,
  100, 102, 103, 104, 106, 107, 109, 110, 111, 113, 114, 116, 117, 119, 120,
  121, 123, 124, 126, 128, 129, 131, 132, 134, 135, 137, 138, 140, 142, 143,
  145, 146, 148, 150, 151, 153, 155, 157, 158, 160, 162, 163, 165, 167, 169,
  170, 172, 174, 176, 178, 179, 181, 183, 185, 187, 189, 191, 193, 194, 196,
  198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 227,
  229, 231, 233, 235, 237, 239, 241, 244, 246, 248, 250, 252, 255,
];
const validLEDs = [
  0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b01111111,
  0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b01111111,
  0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b01111111, 0b00000000,
];
const pixelArrayToPosition = [
  6, 22, 38, 54, 70, 86, 14, 30, 46, 62, 78, 5, 21, 37, 53, 69, 85, 13, 29, 45,
  61, 77, 4, 20, 36, 52, 68, 84, 12, 28, 44, 60, 76, 3, 19, 35, 51, 67, 83, 11,
  27, 43, 59, 75, 2, 18, 34, 50, 66, 82, 10, 26, 42, 58, 74, 1, 17, 33, 49, 65,
  81, 9, 25, 41, 57, 73, 0, 16, 32, 48, 64, 80, 8, 24, 40, 56, 72,
];

module.exports = async (defaultAddress = 0x75) => {
  let currentFrame = 0;

  const bus = i2cBus.openSync(1);

  const write = async (addr, cmd, data) =>
    new Promise((resolve, reject) => {
      const buffer = Buffer.from(data);
      bus.writeI2cBlock(addr, cmd, buffer.length, buffer, (error) => {
        if (error !== null) {
          console.log("I2C write error: ", error);
          reject();
        } else {
          resolve();
        }
      });
    });

  const setBank = async (bank) =>
    await write(defaultAddress, bankAddress, [bank]);

  const setRegister = async (bank, register, value) => {
    await setBank(bank);
    await write(defaultAddress, register, [value]);
  };

  const sleep = async (sleep) =>
    await setRegister(configBank, shutdownRegister, !sleep);

  const reset = async () => {
    await sleep(true);
    await sleep(false);
  };

  const setFrame = async (frameId) =>
    await setRegister(configBank, frameRegister, frameId);

  const createChunks = (array, chunkSize) =>
    array.reduce((all, one, i) => {
      const ch = Math.floor(i / chunkSize);
      all[ch] = [].concat(all[ch] || [], one);
      return all;
    }, []);

  // init

  await reset();
  await setBank(configBank);
  await write(defaultAddress, modeRegister, [pictureMode]);
  await write(defaultAddress, audiosyncRegister, [0]);

  await setBank(0);
  await write(defaultAddress, 0x00, validLEDs);
  await setBank(1);
  await write(defaultAddress, 0x00, validLEDs);
  await setBank(0);

  // show

  const show = async (pixelArray) => {
    let output = new Array(161);
    output.fill(0);

    pixelArray.map(
      (value, i) => (output[pixelArrayToPosition[i]] = ledGamma[value])
    );

    currentFrame = currentFrame === 0 ? 1 : 0;
    await setBank(currentFrame);

    let chunkSize = 32;
    let chunks = createChunks(output, chunkSize);
    //console.log("output", output);
    let currentChunk = 0;

    while (currentChunk < chunks.length - 1) {
      await write(
        defaultAddress,
        colorOffset + currentChunk * chunkSize,
        chunks[currentChunk]
      );

      currentChunk++;
    }
    await setFrame(currentFrame);
  };

  // clear

  const clear = async () => {
    let blanker = new Array(117);
    blanker.fill(0);
    await show(blanker);
  };

  return {
    show,
    clear,
  };
};
