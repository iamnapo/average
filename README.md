# @iamnapo/average

> Small utility function to calculate the average value of an array

[![build](https://img.shields.io/github/workflow/status/iamnapo/average/ci?style=for-the-badge&logo=github&label=)](https://github.com/iamnapo/average/actions) [![npm](https://img.shields.io/npm/v/@iamnapo/average.svg?style=for-the-badge&logo=npm&label=)](https://www.npmjs.com/package/@iamnapo/average) [![size](https://img.shields.io/bundlephobia/min/@iamnapo/average.svg?style=for-the-badge&label=size)](https://bundlephobia.com/result?p=@iamnapo/average)

## Install

```sh
$ npm i @iamnapo/average
```

## Usage

```js
import average from "@iamnapo/average";

average([0, 1, 2, 3, 4, 5]); // => 2.5
average([0, 1, 2, 3, 4, 5], { excludeZeroes: true }); // => 3
average([{ name: "iamnapo", age: 28 }, { age: 28 }, { name: "Alice", age: 25 }], { get: (v) => v.age }); // => 27
average([]); // => NaN
```

## API

### average(input, options?)

Get the average value from an array.

#### input

Type: `unknown[]`

Input array.

#### options

Type: `object`

You can specify the below options.

##### excludeZeroes

Type: `boolean`\
Default: `false`

Exclude zero values from the calculation.

##### get

Type: `Function`\
Default: `(v) => v`

Function used to extract each value.
