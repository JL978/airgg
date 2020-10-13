import React from "react";
import PageWrapper from "./components/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/front-page/Hero";
import TrendingSection from "./components/front-page/TrendingSection";
import Benefits from "./components/front-page/Benefits";
import Featured from "./components/front-page/Featured";
import HelpCTA from "./components/front-page/HelpCTA";
import BrowseMore from "./components/front-page/BrowseMore";
import ProductPage from "./components/product-page/ProductPage";
import Footer from "./components/Footer";
import { Link, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar>
				<Link to="/explore">Explore</Link>
				<Link to="/security">Security</Link>
				<Link to="/support">Support</Link>
			</Navbar>

			<PageWrapper>
				<Switch>
					<Route exact path="/">
						<Hero />
						<TrendingSection />
						<Benefits />
						<Featured />
						<HelpCTA />
						<BrowseMore />
					</Route>
					<Route path="/explore">
						<ProductPage />
					</Route>
				</Switch>
			</PageWrapper>

			<Footer />
		</>
	);
}

export default App;
