// export const debounce = <T>(func: (prop: T) => void, delay: number) => {
// 	let timeoutId: ReturnType<typeof setTimeout>;

// 	return (...args: Parameters<typeof func>) => {
// 		clearTimeout(timeoutId);
// 		timeoutId = setTimeout(() => {
// 			func(...args);
// 		}, delay);
// 	};
// };

export const debounce = <Args extends unknown[]>(func: (...args: Args) => void, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (...args: Args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};