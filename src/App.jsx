import NavBar from "./components/NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Job from "./Job.jsx";
import Certificate from "./Certificate.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<>
			<Home />
			<About />
			<NavBar />
			<Education />
			<Job />
			<Certificate />
			<Footer />
		</>
	);
}

export default App;
