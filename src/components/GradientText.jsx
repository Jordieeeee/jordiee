import { motion } from "framer-motion";

export default function GradientText({
	children,
	colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
	animate = true,
	className = "",
}) {
	const gradientStyle = {
		backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
		backgroundSize: "200% 100%",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		backgroundClip: "text",
	};

	return (
		<motion.span
			className={`inline-block ${className}`}
			animate={
				animate
					? {
							backgroundPosition: ["0% center", "100% center", "0% center"],
					  }
					: {}
			}
			transition={{
				duration: 6,
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
			}}
			style={gradientStyle}
		>
			{children}
		</motion.span>
	);
}
