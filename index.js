const average = (input, options = {}) => {
	options = {
		excludeZeroes: false,
		excludeFalsies: false,
		get: (v) => v,
		...options,
	};
	if (!Array.isArray(input)) throw new TypeError("`input` must be an array");
	if (typeof options.get !== "function") throw new TypeError("Expected a function");

	const count = options.excludeFalsies || options.excludeZeroes ? input.filter(options.get).length : input.length;
	if (!count) return Number.NaN;

	const sum = input.reduce((accumulator, currentValue) => {
		const term = options.get(currentValue);
		if (options.excludeFalsies && !term) return accumulator;
		return accumulator + term;
	}, 0);

	return sum / count;
};

export default average;
