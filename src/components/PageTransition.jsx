import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 0,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
				duration: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { scaleY: 1 },
		visible: { scaleY: 0, transition: { duration: 0.3, ease: "easeInOut" } },
	};

	if (!isLoading) return null;

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="fixed inset-0 z-50 pointer-events-none"
		>
			{[...Array(6)].map((_, i) => (
				<motion.div
					key={i}
					variants={itemVariants}
					className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"
					style={{ left: `${i * 16.66}%` }}
				/>
			))}
		</motion.div>
	);
}
