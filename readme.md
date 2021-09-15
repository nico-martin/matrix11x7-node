# matrix11x7 NodeJS
A nodeJS library for the [Pimoroni 11x7 LED Matrix Breakout](https://shop.pimoroni.com/products/11x7-led-matrix-breakout)

It works with **nodeJS v10.17.0**, other versions might work as well.

## Installation
```
npm i matrix11x7
```

this will only work on a linux system with an i2c bus. on raspbian i2c is not enabled by default, [here's some information on enabling it](https://learn.sparkfun.com/tutorials/raspberry-pi-spi-and-i2c-tutorial#i2c-on-pi).

## Usage

This library provides basicly two methods. `basicMatrix`, that allows you to display a pixel matrix (prefferably 11x7 pixels) and `scrollText`, that let's you write a string that will then scroll through the screen.

### Basic Matrix
```javascript
const { basicMatrix } = require('matrix11x7');

// a 7 by 11 pixel matrix where each value is an integer between 0 an 255 (intensity)
const matrix = [
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 50, 0, 0, 0, 0, 0, 50, 0, 0],
  [0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0],
  [0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0],
];

basicMatrix(matrix);
```

### Scrolling Text
```javascript
const { scrollText } = require('matrix11x7');

scrollText('Hello World', {
  speed: 80, // optional - milliseconds between each step
  infinite: true, // optional - wether it should stop after one run or keep running
  font: null, // optional - the font you want to use (see src/fonts/ as an example)
  intensity: 50, // optional - an integer between 0 an 255 (intensity)
});
```