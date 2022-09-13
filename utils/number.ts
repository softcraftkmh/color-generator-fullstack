export const generateRandomInteger = (max: number) => {
	// NOTE: + 1 for max inclusive
	return Math.floor(Math.random() * (max + 1));
};
