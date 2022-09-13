export type RGBColor = {
	type: "rgb";
	red: number;
	green: number;
	blue: number;
};

export type HSLColor = {
	type: "hsl";
	hue: string;
	saturation: string;
	lightness: string;
};

export type AppColor = RGBColor | HSLColor;
