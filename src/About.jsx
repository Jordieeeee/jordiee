import profileImg from "./assets/me/jords.png"; // change path if needed
import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

function About() {
	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.08,
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

	const badge = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3 },
		},
	};

	return (
		<section id="profile" className="min-h-screen relative overflow-hidden">
			{/* Decorative Background */}
			<div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/10 dark:bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-200/10 dark:bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
			
			<div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
				{/* Glass Card */}
				<motion.div
					initial={{ opacity: 0, y: 60, rotateX: 10 }}
					whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative max-w-5xl w-full p-10 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl
					border border-white/50 dark:border-gray-700/50
					shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] card-3d"
					whileHover={{ y: -8, rotateX: 0, rotateY: 2 }}
				>
					<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/40 dark:from-gray-700/40 via-transparent to-white/10 dark:to-gray-800/10" />

					{/* Left Content */}
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
							<FiInfo className="text-4xl md:text-5xl text-gray-900 dark:text-white" />
							<motion.h2
								initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
								whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="text-4xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white"
							>
								About Me
							</motion.h2>
						</motion.div>

						<motion.p
							variants={item}
							className="text-gray-600 dark:text-gray-300 text-base leading-7 mb-5 w-full"
						>
							Hello! I'm{" "}
							<span className="font-semibold text-gray-900 dark:text-white">
								Jordan
							</span>
							, a passionate Full Stack Web Developer and BS Information
							Technology student. I love building clean, functional, and modern
							web applications that provide great user experiences.
						</motion.p>

						<motion.p
							variants={item}
							className="text-gray-600 dark:text-gray-300 text-base leading-7 mb-5 w-full"
						>
							I specialize in frontend and backend development using modern
							tools such as React, Tailwind CSS, PHP, MySQL, and JavaScript. I
							enjoy solving problems, designing interfaces, and continuously
							learning new technologies.
						</motion.p>

						<motion.div
							variants={item}
							className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-10"
						/>

						{/* Tech Stack */}
						<div className="space-y-6">
							<div className="flex items-center gap-3">
								<span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
								<motion.h2
									variants={item}
									className="text-xl font-semibold text-gray-900 dark:text-white tracking-wide"
								>
									Tech Stack
								</motion.h2>
							</div>

							{/* UI / UX */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									UI / UX
								</p>
									<div className="flex flex-wrap gap-2">
										{["Figma"].map((tool) => (
											<motion.span
												key={tool}
												variants={badge}
												whileHover={{ 
													scale: 1.12, 
													y: -4,
													rotateX: 8,
													rotateY: 4,
													boxShadow: "0 10px 25px rgba(59, 130, 246, 0.25)"
												}}
												whileTap={{ scale: 0.98 }}
												className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 
												backdrop-blur-md
												border border-blue-200/60 dark:border-blue-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-blue-100 dark:hover:bg-blue-900/40
												"
											>
												{tool}
											</motion.span>
										))}
									</div>
							</div>

							{/* Frontend */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									Frontend
								</p>
									<div className="flex flex-wrap gap-2">
										{["JavaScript", "React", "Tailwind CSS", "Prettier"].map(
											(tool, idx) => (
												<motion.span
													key={tool}
													variants={badge}
													whileHover={{ 
														scale: 1.12, 
														y: -4,
														rotateX: 8,
														rotateY: 4,
														boxShadow: "0 10px 25px rgba(59, 130, 246, 0.25)"
													}}
													whileTap={{ scale: 0.98 }}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: idx * 0.05 }}
													className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 
												backdrop-blur-md
												border border-blue-200/60 dark:border-blue-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-blue-100 dark:hover:bg-blue-900/40
												"
												>
													{tool}
												</motion.span>
											)
										)}
									</div>
							</div>

							{/* Backend */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									Backend
								</p>
									<div className="flex flex-wrap gap-2">
										{["PHP", "MySQL", "Python", "Java"].map((tool, idx) => (
											<motion.span
												key={tool}
												variants={badge}
												whileHover={{ 
													scale: 1.12, 
													y: -4,
													rotateX: 8,
													rotateY: 4,
													boxShadow: "0 10px 25px rgba(168, 85, 247, 0.25)"
												}}
												whileTap={{ scale: 0.98 }}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 
												backdrop-blur-md
												border border-purple-200/60 dark:border-purple-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-purple-100 dark:hover:bg-purple-900/40
												"
											>
												{tool}
											</motion.span>
										))}
									</div>
							</div>

							{/* Cloud */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									Cloud
								</p>
									<div className="flex flex-wrap gap-2">
										{["Docker", "XAMPP"].map((tool, idx) => (
											<motion.span
												key={tool}
												variants={badge}
												whileHover={{ 
													scale: 1.12, 
													y: -4,
													rotateX: 8,
													rotateY: 4,
													boxShadow: "0 10px 25px rgba(34, 197, 94, 0.25)"
												}}
												whileTap={{ scale: 0.98 }}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 
												backdrop-blur-md
												border border-green-200/60 dark:border-green-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-green-100 dark:hover:bg-green-900/40
												"
											>
												{tool}
											</motion.span>
										))}
									</div>
							</div>

							{/* CMS & No-Code */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									CMS & No-Code
								</p>
									<div className="flex flex-wrap gap-2">
										{["n8n"].map((tool, idx) => (
											<motion.span
												key={tool}
												variants={badge}
												whileHover={{ 
													scale: 1.12, 
													y: -4,
													rotateX: 8,
													rotateY: 4,
													boxShadow: "0 10px 25px rgba(249, 115, 22, 0.25)"
												}}
												whileTap={{ scale: 0.98 }}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 
												backdrop-blur-md
												border border-orange-200/60 dark:border-orange-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-orange-100 dark:hover:bg-orange-900/40
												"
											>
												{tool}
											</motion.span>
										))}
									</div>
							</div>

							{/* Developer Tools */}
							<div>
								<p className="text-medium font-medium text-gray-700 dark:text-gray-200 mb-2">
									Developer Tools
								</p>
									<div className="flex flex-wrap gap-2">
										{[
											"GitHub",
											"VS Code",
											"Cursor",
											"IntelliJ IDEA",
											"PyCharm",
											"NetBeans",
											"Xcode",
										].map((tool, idx) => (
											<motion.span
												key={tool}
												variants={badge}
												whileHover={{ 
													scale: 1.12, 
													y: -4,
													rotateX: 8,
													rotateY: 4,
													boxShadow: "0 10px 25px rgba(139, 92, 246, 0.25)"
												}}
												whileTap={{ scale: 0.98 }}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: idx * 0.05 }}
												className="
												px-4 py-1.5 rounded-full text-sm font-medium
												bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30 
												backdrop-blur-md
												border border-violet-200/60 dark:border-violet-600/40
												text-gray-700 dark:text-gray-200
												shadow-md dark:shadow-lg
												hover:shadow-lg
												transition-all duration-300
												hover:bg-violet-100 dark:hover:bg-violet-900/40
												"
											>
												{tool}
											</motion.span>
										))}
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
