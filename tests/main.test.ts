import test from "node:test";
import { strict as assert } from "node:assert";

import average from "../source/index.js";

await test("main", () => {
	assert.equal(average([0, 1, 2, 3, 4, 5]), 2.5);
	assert.equal(average([0, 1, 2, 3, 4, 5], { excludeZeroes: true }), 3);
	assert.equal(average([0, 1, 2, 3, 4, 5], { excludeFalsies: true }), 3);
	assert.equal(average([0, 1, 2, Number.NaN, undefined]), Number.NaN);
	assert.equal(average([0, 1, 2, Number.NaN, undefined], { excludeZeroes: true }), Number.NaN);
	assert.equal(average([0, 1, 2, Number.NaN, undefined], { excludeFalsies: true }), 1.5);
	assert.equal(
		average([{ name: "iamnapo", age: 28 }, { age: 28 }, { name: "Alice", age: 25 }], {
			get: (v) => (v as { age: number }).age,
		}),
		27,
	);
	assert.equal(average([]), Number.NaN);
});
