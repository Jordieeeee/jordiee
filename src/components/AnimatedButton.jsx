import { motion } from "framer-motion";

export default function AnimatedButton({
	children,
	className = "",
	onClick,
	variant = "primary",
	...props
}) {
	const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden";

	const variants = {
		primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
		secondary: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600",
		outline: "border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10",
	};

	const buttonVariants = {
		rest: { scale: 1 },
		hover: { scale: 1.05 },
		tap: { scale: 0.95 },
	};

	return (
		<motion.button
			variants={buttonVariants}
			initial="rest"
			whileHover="hover"
			whileTap="tap"
			onClick={onClick}
			className={`${baseClasses} ${variants[variant]} button-3d`}
			{...props}
		>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				{children}
			</motion.span>
		</motion.button>
	);
}
