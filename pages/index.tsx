import Button from "elements/button";
import Header from "elements/header";
import useSWR from "swr";
import { convertToRGBColor } from "utils/colors";

import type { AppColor, RGBColor } from "types/color";
const Home = () => {
	const { data, mutate } = useSWR<{ data: AppColor[] }>("/api/colors");

	const rgbColors: RGBColor[] = data
		? data.data?.map((c) => convertToRGBColor(c)) || []
		: [];

	return (
		<div className="h-screen">
			<Header />
			<div className="shadow-sm">
				<div className="max-w-7xl mx-auto px-2 py-4 flex">
					<Button className="ml-auto" onClick={mutate}>
						Generate Color
					</Button>
				</div>
			</div>
			<div className="h-full">
				{!data ? (
					<div className="h-96 flex items-center justify-center">
						<div className="lds-dual-ring" />
					</div>
				) : (
					<div className="grid grid-cols-5 h-full">
						{rgbColors.map((c, i) => (
							<div className="flex flex-col" key={i}>
								<>
									<p className="text-center p-2 flex items-center justify-center whitespace-pre-wrap h-28 border-r-2">
										{JSON.stringify(data.data[i]).replaceAll(",", ", ")}
									</p>
									<div
										className="flex-grow"
										style={{
											backgroundColor: `rgb(${c.red}, ${c.green}, ${c.blue})`,
										}}
									></div>
								</>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
