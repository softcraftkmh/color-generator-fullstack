// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { AppColor } from "types/color";
import { convertFromRGBColor, generateRandomRGBColor } from "utils/colors";
import { generateRandomInteger } from "utils/number";

type Data = {
	data: AppColor[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const randomColors: AppColor[] = [...Array(5)].map(() => {
		// can be extend for future possible color types
		const randomInteger = generateRandomInteger(2);
		switch (randomInteger) {
			// NOTE: for RGB
			case 0: {
				return generateRandomRGBColor();
			}
			// NOTE: for HSL
			case 1: {
				const color = generateRandomRGBColor();
				return convertFromRGBColor("hsl", color.red, color.green, color.blue);
			}
			// NOTE: for HSL
			case 2: {
				const color = generateRandomRGBColor();
				return convertFromRGBColor("brgb", color.red, color.green, color.blue);
			}
			// NOTE: should not reach here
			default: {
				return generateRandomRGBColor();
			}
		}
	});

	res.status(200).json({ data: randomColors });
}
