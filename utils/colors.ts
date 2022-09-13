import Color from "color";
import type { HSLColor, RGBColor } from "types/color";
import { generateRandomInteger } from "utils/number";

export const generateRandomRGBColor = (): RGBColor => {
	const color = Color.rgb(
		generateRandomInteger(255),
		generateRandomInteger(255),
		generateRandomInteger(255)
	);
	const [red, green, blue] = color.rgb().array();
	return {
		type: "rgb",
		red,
		green,
		blue,
	};
};

export const convertFromRGBColor = (
	to: "hsl",
	red: number,
	green: number,
	blue: number
): HSLColor => {
	switch (to) {
		case "hsl": {
			const color = Color.rgb(red, green, blue);
			const [hue, saturation, lightness] = color.hsl().array();
			return {
				type: "hsl",
				hue: Math.floor(hue).toString(),
				saturation: Math.floor(saturation).toString(),
				lightness: Math.floor(lightness).toString(),
			};
		}
	}
};
