interface Options {
	/**
	@default false
	*/
	readonly excludeZeroes?: boolean;

	/**
	@default false
	*/
	readonly excludeFalsies?: boolean;

	/**
	@default (v) => v
	*/
	readonly get?: (v: any) => unknown;
}

/**
Small utility function to calculate the average value of an array.
```
import average from "@iamnapo/average";
average([0, 1, 2, 3, 4, 5]); // => 2.5
average([0, 1, 2, 3, 4, 5], { excludeZeroes: true }); // => 3
average([0, 1, 2, Number.NaN, undefined], { excludeFalsies: true }); // => 1.5
average([{ name: "iamnapo", age: 28 }, { age: 28 }, { name: "Alice", age: 25 }], { get: (v) => v.age }); // => 27
average([]); // => NaN
```
*/
export default function average(
	input: readonly unknown[],
	options?: Options,
): number;
