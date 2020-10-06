import React from "react";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingSection from "./components/TrendingSection";
import Benefits from "./components/Benefits";
import Featured from "./components/Featured";
import HelpCTA from "./components/HelpCTA";
import BrowseMore from "./components/BrowseMore";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<FrontPage>
				<Navbar />
				<Hero />
				<TrendingSection />
				<Benefits />
				<Featured />
				<HelpCTA />
				<BrowseMore />
			</FrontPage>
			<Footer />
		</>
	);
}

export default App;
