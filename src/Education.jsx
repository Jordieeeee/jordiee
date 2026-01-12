import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

function Projects() {
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

	const projectContainer = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const projectItemLeft = {
		hidden: { opacity: 0, x: -40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	const projectItemRight = {
		hidden: { opacity: 0, x: 40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	return (
		<section id="education" className="min-h-screen relative z-0">
			<div className="min-h-screen flex items-center justify-center px-6 py-20">
				{/* Glass Card */}
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative max-w-5xl w-full p-10 rounded-3xl bg-white/70 backdrop-blur-2xl
					border border-white/50
					shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
				>
					<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/10" />

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div
							variants={item}
							className="flex items-center gap-3 mb-10"
						>
							<FiBookOpen className="text-4xl md:text-5xl text-gray-900" />
							<motion.h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
								Recent Projects
							</motion.h2>
						</motion.div>
						<motion.div
							variants={item}
							className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"
						/>
					</motion.div>

					{/* Project List */}
					<motion.div
						variants={projectContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						className="space-y-16"
					>
						{/* Project 1 */}
						<motion.div
							variants={projectItemLeft}
							className="grid md:grid-cols-2 gap-14 items-center"
						>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 200, damping: 18 }}
								className="relative group"
							>
								<img
									src="/projects/portfolio.png"
									alt="Portfolio Website"
									className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
							</motion.div>

							<div>
								<motion.h3
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2, duration: 0.5 }}
									className="text-2xl font-semibold mb-4 tracking-tight"
								>
									Portfolio Website
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="text-gray-600 leading-relaxed mb-6 max-w-lg"
								>
									{" "}
									Built with HTML, CSS, and Tailwind. Fully responsive personal
									portfolio with a clean and modern user interface.
								</motion.p>

								<div className="flex flex-wrap gap-3">
									{["HTML", "CSS", "Tailwind"].map((tool) => (
										<motion.span
											variants={badge}
											whileHover={{ scale: 1.05 }}
											className="
											px-4 py-1.5 rounded-full text-sm font-medium
											bg-white/60 backdrop-blur-md
											border border-white/40
											text-gray-700
											shadow-sm
											hover:bg-white/80
											transition
											"
										>
											{tool}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>

						{/* Divider */}
						<div className="h-px bg-gray-300/70" />

						{/* Project 2 */}
						<motion.div
							variants={projectItemRight}
							className="grid md:grid-cols-2 gap-14 items-center"
						>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 200, damping: 18 }}
								className="relative group md:order-2"
							>
								<img
									src="/projects/scheduling.png"
									alt="Time Scheduling System"
									className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
							</motion.div>

							<div>
								<motion.h3
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2, duration: 0.5 }}
									className="text-2xl font-semibold mb-4 tracking-tight"
								>
									{" "}
									Time Scheduling System
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="text-gray-600 leading-relaxed mb-6 max-w-lg"
								>
									{" "}
									Final project developed using Java (OOP) and MySQL, designed
									to efficiently manage schedules and data.
								</motion.p>

								<div className="flex flex-wrap gap-3">
									{["Java", "MySQL", "OOP"].map((tool) => (
										<motion.span
											variants={badge}
											whileHover={{ scale: 1.05 }}
											className="
											px-4 py-1.5 rounded-full text-sm font-medium
											bg-white/60 backdrop-blur-md
											border border-white/40
											text-gray-700
											shadow-sm
											hover:bg-white/80
											transition
											"
										>
											{tool}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>

						{/* Divider */}
						<div className="h-px bg-gray-300/70" />

						{/* Project 3 */}
						<motion.div
							variants={projectItemLeft}
							className="grid md:grid-cols-2 gap-14 items-center"
						>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 200, damping: 18 }}
								className="relative group"
							>
								<img
									src="/projects/thrift.png"
									alt="Online Thrift Shop"
									className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
							</motion.div>

							<div>
								<motion.h3
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2, duration: 0.5 }}
									className="text-2xl font-semibold mb-4 tracking-tight"
								>
									{" "}
									Online Thrift Shop
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, y: 12 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className="text-gray-600 leading-relaxed mb-6 max-w-lg"
								>
									{" "}
									A web-based thrift store built using HTML, CSS, Tailwind, and
									MySQL, featuring a clean and user-friendly interface.
								</motion.p>

								<div className="flex flex-wrap gap-3">
									{["HTML", "CSS", "Tailwind", "MySQL"].map((tool) => (
										<motion.span
											variants={badge}
											whileHover={{ scale: 1.05 }}
											className="
											px-4 py-1.5 rounded-full text-sm font-medium
											bg-white/60 backdrop-blur-md
											border border-white/40
											text-gray-700
											shadow-sm
											hover:bg-white/80
											transition
											"
										>
											{tool}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Projects;
