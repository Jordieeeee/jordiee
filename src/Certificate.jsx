import { motion } from "framer-motion";
import { FiExternalLink, FiX, FiAward } from "react-icons/fi";
import { useState } from "react";

import cert1 from "./assets/cert/cert1.png";
import cert2 from "./assets/cert/cert2.png";
import cert3 from "./assets/cert/cert3.png";
import cert4 from "./assets/cert/cert4.png";

const certificates = [
	{
		title: "Databiz Conference 2024",
		org: "Batangas Information Technology Society",
		year: "2024",
		img: cert1,
		theme: "from-gray-500 to-gray-600",
		themeBg: "bg-gray-500/10",
	},
	{
		title: "BIT Conference (BITCON) 2025",
		org: "Batangas Information Technology Society",
		year: "2025",
		img: cert2,
		theme: "from-gray-500 to-gray-600",
		themeBg: "bg-gray-500/10",
	},
	{
		title: "Databiz Conference 2025",
		org: "Batangas Information Technology Society",
		year: "2025",
		img: cert3,
		theme: "from-gray-500 to-gray-600",
		themeBg: "bg-gray-500/10",
	},
	{
		title: "TechTalks S3",
		org: "CICS Student Council",
		year: "2025",
		img: cert4,
		theme: "from-gray-500 to-gray-600",
		themeBg: "bg-gray-500/10",
	},
];

function Certificate() {
	const [expandedCert, setExpandedCert] = useState(null);

	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 12 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const certItem = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section id="certificate" className="min-h-screen relative overflow-hidden">
			{/* Decorative Background Orbs - Optimized */}
			<div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-2xl pointer-events-none" />
			<div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-200/10 rounded-full blur-2xl pointer-events-none" />

			<div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
				{/* Glass Card */}
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative max-w-5xl w-full p-10 rounded-3xl bg-white/70 backdrop-blur-md
					border border-white/50
					shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
					style={{ willChange: "transform" }}
				>
					<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/10" />

					{/* Header */}
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div
							variants={item}
							className="flex items-center gap-3 mb-5"
						>
							<FiAward size={32} className="text-gray-900" />
							<motion.h2
								initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
								whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="text-4xl md:text-4xl font-semibold tracking-tight text-gray-900"
							>
								Certifications
							</motion.h2>
						</motion.div>

						<motion.div
							variants={item}
							className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"
						/>

						<motion.p
							variants={item}
							className="text-gray-600 text-base leading-7 mb-10"
						>
							Recognized participation in technology, data science, AI, and
							professional development conferences and events.
						</motion.p>

						{/* CERT GRID */}
						<motion.div
							variants={container}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 gap-6"
						>
							{certificates.map((cert, i) => (
								<motion.div
									key={i}
									variants={certItem}
									whileHover={{ scale: 1.03, y: -6 }}
									transition={{ type: "spring", stiffness: 200, damping: 18 }}
									className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
									style={{ willChange: "transform" }}
								>
									{/* Image Container */}
									<div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
										<motion.img
											src={cert.img}
											alt={cert.title}
											initial={{ opacity: 0, scale: 1.05 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, ease: "easeOut" }}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>

										{/* Shine overlay on hover */}
										<div
											className="absolute inset-0 opacity-0 group-hover:opacity-100
											transition duration-500
											bg-gradient-to-tr from-transparent via-white/10 to-transparent
											pointer-events-none"
										/>

										{/* Overlay Button */}
										<motion.div
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											transition={{ duration: 0.2 }}
											className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 flex items-center justify-center"
										>
											<motion.button
												onClick={() => setExpandedCert(cert)}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg transition-shadow duration-200"
											>
												View Certificate <FiExternalLink className="w-5 h-5" />
											</motion.button>
										</motion.div>
									</div>

									{/* Info Section */}
									<div className="p-6 bg-gradient-to-br from-white/95 to-gray-50/95 border-t border-gray-200/50">
										<h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
											{cert.title}
										</h3>
										<div className="flex items-center gap-2 mt-2">
											<div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
											<p className="text-gray-600 text-sm font-medium">
												{cert.org}
											</p>
											<div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
											<p className="text-gray-500 text-sm">{cert.year}</p>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Modal */}
			{expandedCert && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
					onClick={() => setExpandedCert(null)}
				>
					{/* Decorative Elements */}
					<div className="absolute top-10 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
					<div
						className="absolute bottom-10 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
						style={{ animationDelay: "0.5s" }}
					/>

					<motion.div
						initial={{ scale: 0.8, opacity: 0, y: 50 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.8, opacity: 0, y: 50 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-4xl w-full border border-gray-200/50 overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Gradient Overlay */}
						<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
						{/* Close Button */}
						<motion.button
							onClick={() => setExpandedCert(null)}
							whileHover={{ scale: 1.1, rotate: 90 }}
							whileTap={{ scale: 0.9 }}
							className="absolute top-6 right-6 z-10 p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
						>
							<FiX size={20} className="text-gray-700" />
						</motion.button>

						{/* Full Image */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
						>
							<img
								src={expandedCert.img}
								alt={expandedCert.title}
								className="w-full h-full object-contain p-4"
							/>
							{/* Vignette Effect */}
							<div className="absolute inset-0 shadow-inner pointer-events-none" />
						</motion.div>

						{/* Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="p-8 bg-gradient-to-br from-white to-gray-50 border-t border-gray-200/50"
						>
							<div className="flex items-center gap-3 mb-2">
								<FiAward className="text-gray-700" size={28} />
								<h2 className="text-2xl font-bold text-gray-900">
									{expandedCert.title}
								</h2>
							</div>
							<div className="flex items-center gap-2 mt-3">
								<div className="w-2 h-2 rounded-full bg-gray-400" />
								<p className="text-gray-600 font-medium">{expandedCert.org}</p>
								<div className="w-2 h-2 rounded-full bg-gray-400" />
								<p className="text-gray-500">{expandedCert.year}</p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
}

export default Certificate;
