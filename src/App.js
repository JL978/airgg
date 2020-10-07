import React from "react";
import FrontPage from "./components/front-page/FrontPage";
import Navbar from "./components/Navbar";
import Hero from "./components/front-page/Hero";
import TrendingSection from "./components/front-page/TrendingSection";
import Benefits from "./components/front-page/Benefits";
import Featured from "./components/front-page/Featured";
import HelpCTA from "./components/front-page/HelpCTA";
import BrowseMore from "./components/front-page/BrowseMore";
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
