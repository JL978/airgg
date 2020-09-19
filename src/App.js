import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingSection from "./components/TrendingSection";
import Benefits from "./components/Benefits";
import Featured from "./components/Featured";
import HelpCTA from "./components/HelpCTA";
import BrowseMore from "./components/BrowseMore";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<TrendingSection />
			<Benefits />
			<Featured />
			<HelpCTA />
			<BrowseMore />
		</div>
	);
}

export default App;
