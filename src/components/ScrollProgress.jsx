import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setScrollProgress(scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.div
			className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
			style={{ width: `${scrollProgress}%` }}
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1 }}
			transition={{ duration: 0.1 }}
		/>
	);
}
