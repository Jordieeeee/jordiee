import NavBar from "./components/NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Job from "./Job.jsx";
import Certificate from "./Certificate.jsx";
import Footer from "./components/Footer.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

function App() {
	return (
		<div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500 overflow-x-hidden">
			<ScrollProgress />
			<DarkModeToggle />
			<Home />
			<About />
			<NavBar />
			<Education />
			<Job />
			<Certificate />
			<Footer />
			
			{/* Enhanced Scroll Styles */}
			<style>{`
				/* Custom Scrollbar */
				::-webkit-scrollbar {
					width: 10px;
				}
				
				::-webkit-scrollbar-track {
					background: rgba(0, 0, 0, 0.05);
				}
				
				::-webkit-scrollbar-thumb {
					background: rgba(59, 130, 246, 0.5);
					border-radius: 5px;
					transition: all 0.3s ease;
				}
				
				::-webkit-scrollbar-thumb:hover {
					background: rgba(59, 130, 246, 0.8);
				}
				
				/* Dark Mode Scrollbar */
				.dark::-webkit-scrollbar-track {
					background: rgba(255, 255, 255, 0.05);
				}
				
				.dark::-webkit-scrollbar-thumb {
					background: rgba(96, 165, 250, 0.5);
				}
				
				.dark::-webkit-scrollbar-thumb:hover {
					background: rgba(96, 165, 250, 0.8);
				}
			`}</style>
		</div>
	);
}

export default App;
