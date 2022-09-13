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
					<div className="grid grid-cols-1 md:grid-cols-5 h-full">
						{rgbColors.map((c, i) => (
							<div className="flex flex-col" key={i}>
								<>
									<div
										className="flex-grow min-h-[220px] flex justify-center"
										style={{
											backgroundColor: `rgb(${c.red}, ${c.green}, ${c.blue})`,
										}}
									>
										<p className="bg-slate-200 text-center p-2 flex items-center justify-center whitespace-pre-wrap h-28 border-r-2 mx-4 mt-4 rounded-xl shadow-lg">
											{JSON.stringify(data.data[i]).replaceAll(",", ", ")}
										</p>
									</div>
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
