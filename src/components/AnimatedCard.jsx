import { motion } from "framer-motion";

export default function AnimatedCard({ children, className = "", delay = 0, ...props }) {
	const containerVariants = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay,
				ease: "easeOut",
			},
		},
	};

	const hoverVariants = {
		hover: {
			y: -12,
			rotateX: 5,
			rotateY: 2,
			boxShadow: "0 40px 80px rgba(59, 130, 246, 0.3)",
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			variants={{ ...containerVariants, ...hoverVariants }}
			viewport={{ once: true, amount: 0.1 }}
			className={`card-3d card-enhanced rounded-3xl backdrop-blur-xl ${className}`}
			{...props}
		>
			{children}
		</motion.div>
	);
}
