# @iamnapo/average

> Small utility function to calculate the average value of an array

[![build](https://badges.iamnapo.me/ci/iamnapo/average)](https://github.com/iamnapo/average/actions) [![npm](https://badges.iamnapo.me/npm/@iamnapo/average)](https://www.npmjs.com/package/@iamnapo/average)

## Install

```sh
$ npm i @iamnapo/average
```

## Usage

```js
import average from "@iamnapo/average";

average([0, 1, 2, 3, 4, 5]); // => 2.5
average([0, 1, 2, 3, 4, 5], { excludeZeroes: true }); // => 3
average([0, 1, 2, Number.NaN, undefined], { excludeFalsies: true }); // => 1.5
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

##### excludeFalsies

Type: `boolean`\
Default: `false`

Exclude [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values from the calculation.

##### get

Type: `Function`\
Default: `(v) => v`

Function used to extract each value.
