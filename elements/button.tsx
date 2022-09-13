import clsx from "clsx";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

const Button = (props: ButtonProps) => {
	const { children, className, onClick } = props;
	return (
		<button
			className={clsx(
				"inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
