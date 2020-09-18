import React from "react";
import TrendingCard from "./TrendingCard";
import TrendingTag from "./TrendingTag";
import TrendingFeaturedCard from "./TrendingFeaturedCard";

const dummyTrending = [
	{
		name: "Roblox",
		products: 16298,
	},
	{
		name: "Fortnite",
		products: 12642,
	},
	{
		name: "Grand Theft Auto 5",
		products: 5264,
	},
	{
		name: "Valorant",
		products: 1552,
	},
];
const dummyOther = [
	{
		name: "CS:GO",
		products: 925,
	},
	{
		name: "ARK: Survival Evolved",
		products: 725,
	},
	{
		name: "League of Lengends",
		products: 214,
	},
	{
		name: "Apex Legends",
		products: 112,
	},
	{
		name: "Warframe",
		products: 214,
	},
	{
		name: "Call of Duty: Modern Warfare",
		products: 21,
	},
];

const dummyFeatured = [
	{
		title: "Valuable finds under $50",
		description:
			"We round up sellers offering top-notch products at an incredible value. Go ahead, take a peek.",
		cta: "See all",
	},
	{
		title: "Official Aired Team",
		description:
			"Checkout products being sold by the official Aired Team. These products are 100% verified and catered to your needs.",
		cta: "Check it out",
	},
];

export default function TrendingSection() {
	return (
		<div className="trendingSection">
			<h1>Trending Categories</h1>
			<div className="trendingMainGrid">
				{dummyTrending.map((game, index) => {
					return <TrendingCard game={game} key={index} />;
				})}
			</div>

			<div className="trendCardsGrid">
				{dummyOther.map((game, index) => {
					return <TrendingTag game={game} key={index} />;
				})}
				<TrendingTag game={{ name: "Other" }} />
			</div>

			<div className="trendingFeatured">
				{dummyFeatured.map((feature, index) => {
					return <TrendingFeaturedCard feature={feature} key={index} />;
				})}
			</div>
		</div>
	);
}
