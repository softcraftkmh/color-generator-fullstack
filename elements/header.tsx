import Link from "next/link";

const Header = () => {
	return (
		<div className="shadow-md sticky">
			<div className="max-w-7xl mx-auto px-2 py-4 flex">
				<Link href="/">
					<a>
						<div className="font-semibold text-3xl font-serif text-sky-800">
							Color Generator
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
