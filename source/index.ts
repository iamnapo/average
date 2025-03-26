type Options = {
	excludeZeroes?: boolean;
	excludeFalsies?: boolean;
	get?: (v: unknown) => number;
};

const average = (input: unknown[], options: Options = {}) => {
	options = {
		excludeZeroes: false,
		excludeFalsies: false,
		get: (v) => v as number,
		...options,
	};
	if (!Array.isArray(input)) throw new TypeError("`input` must be an array");
	if (typeof options.get !== "function") throw new TypeError("Expected a function");

	const count = options.excludeFalsies || options.excludeZeroes ? input.filter(options.get).length : input.length;
	if (!count) return Number.NaN;

	let sum = 0;

	for (const currentValue of input) {
		const term = options.get(currentValue);
		if (term || !options.excludeFalsies) {
			sum += term;
		}
	}

	return sum / count;
};

export default average;
