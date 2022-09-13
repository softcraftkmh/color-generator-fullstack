import Color from "color";
import type { AppColor, HSLColor, RGBColor, BRGBColor } from "types/color";
import { generateRandomInteger } from "utils/number";

const convertFrom255BaseTo10000Base = (value: number) => (value * 10000) / 255;
const convertFrom10000BaseTo255Base = (value: number) => (value * 255) / 10000;

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

export const convertFromRGBColorToBRGBColor = (from: RGBColor): BRGBColor => {
	const red = +convertFrom255BaseTo10000Base(from.red).toFixed(2);
	const green = +convertFrom255BaseTo10000Base(from.green).toFixed(2);
	const blue = +convertFrom255BaseTo10000Base(from.blue).toFixed(2);

	return {
		type: "brgb",
		red,
		green,
		blue,
	};
};

export const convertToRGBColorFromBRGBColor = (from: BRGBColor): RGBColor => {
	const red = convertFrom10000BaseTo255Base(from.red);
	const green = convertFrom10000BaseTo255Base(from.green);
	const blue = convertFrom10000BaseTo255Base(from.blue);

	return {
		type: "rgb",
		red,
		green,
		blue,
	};
};

export const convertFromRGBColor = (
	to: "hsl" | "brgb",
	red: number,
	green: number,
	blue: number
): AppColor => {
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
		case "brgb": {
			const brgbColor = convertFromRGBColorToBRGBColor({
				type: "rgb",
				red,
				green,
				blue,
			});
			return brgbColor;
		}
	}
};

export const convertToRGBColor = (color: AppColor): RGBColor => {
	switch (color.type) {
		case "rgb": {
			return color;
		}
		case "hsl": {
			const hslColor = Color.hsl(
				+color.hue,
				+color.saturation,
				+color.lightness
			);
			const [red, green, blue] = hslColor.rgb().array();
			return {
				type: "rgb",
				red,
				green,
				blue,
			};
		}
		case "brgb": {
			return convertToRGBColorFromBRGBColor(color);
		}
	}
};
