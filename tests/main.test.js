import test from "ava";

import average from "../index.js";

test("main", (t) => {
	t.is(average([0, 1, 2, 3, 4, 5]), 2.5);
	t.is(average([0, 1, 2, 3, 4, 5], { excludeZeroes: true }), 3);
	t.is(average([0, 1, 2, 3, 4, 5], { excludeFalsies: true }), 3);
	t.is(average([0, 1, 2, Number.NaN, undefined]), Number.NaN);
	t.is(average([0, 1, 2, Number.NaN, undefined], { excludeZeroes: true }), Number.NaN);
	t.is(average([0, 1, 2, Number.NaN, undefined], { excludeFalsies: true }), 1.5);
	t.is(average([{ name: "iamnapo", age: 28 }, { age: 28 }, { name: "Alice", age: 25 }], { get: (v) => v.age }), 27);
	t.is(average([]), Number.NaN);
});

