import { motion } from "framer-motion";
import { useState } from "react";

export default function Tooltip3D({ children, text, position = "top" }) {
	const [isVisible, setIsVisible] = useState(false);

	const positionVariants = {
		top: { y: -40, x: 0 },
		bottom: { y: 40, x: 0 },
		left: { y: 0, x: -40 },
		right: { y: 0, x: 40 },
	};

	const arrowVariants = {
		top: "bottom-[-5px] left-1/2 -translate-x-1/2",
		bottom: "top-[-5px] left-1/2 -translate-x-1/2",
		left: "right-[-5px] top-1/2 -translate-y-1/2",
		right: "left-[-5px] top-1/2 -translate-y-1/2",
	};

	return (
		<div className="relative inline-block">
			<motion.div
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
			>
				{children}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.8, ...positionVariants[position] }}
				animate={
					isVisible
						? { opacity: 1, scale: 1, ...positionVariants[position] }
						: { opacity: 0, scale: 0.8, ...positionVariants[position] }
				}
				transition={{ duration: 0.2 }}
				className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-50"
			>
				<motion.div
					whileHover={{ rotateX: 5, rotateY: 5 }}
					className="px-3 py-1.5 text-sm rounded-lg bg-gray-900 dark:bg-gray-800 text-white shadow-lg"
				>
					{text}
					<div
						className={`absolute w-2 h-2 bg-gray-900 dark:bg-gray-800 ${arrowVariants[position]}`}
						style={{ transform: "rotate(45deg)" }}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}
