import average from "./index.js";

average([0, 1, 2, 3, 4, 5]);
average([0, 1, 2, 3, 4, 5], { excludeZeroes: true });
average([0, 1, 2, Number.NaN, undefined], { excludeFalsies: true });
average([{ name: "iamnapo", age: 28 }, { age: 28 }, { name: "Alice", age: 25 }], { get: (v) => v.age });
average([]);
