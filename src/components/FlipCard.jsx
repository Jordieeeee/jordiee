import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard({ front, back, className = "" }) {
	const [isFlipped, setIsFlipped] = useState(false);

	const containerVariants = {
		rest: { rotateY: 0 },
		hover: { rotateY: 180 },
	};

	const innerVariants = {
		rest: { rotateY: 0 },
		hover: { rotateY: 180 },
	};

	return (
		<motion.div
			initial="rest"
			whileHover="hover"
			animate={isFlipped ? "hover" : "rest"}
			variants={containerVariants}
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}
			className={`relative w-full h-full cursor-pointer ${className}`}
			style={{
				perspective: 1200,
				transformStyle: "preserve-3d",
			}}
		>
			<motion.div
				variants={innerVariants}
				transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
				style={{
					transformStyle: "preserve-3d",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
				}}
				className="w-full h-full"
			>
				{/* Front */}
				<motion.div
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(0deg)",
					}}
					className="w-full h-full absolute top-0 left-0"
				>
					{front}
				</motion.div>

				{/* Back */}
				<motion.div
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
					className="w-full h-full absolute top-0 left-0"
				>
					{back}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
