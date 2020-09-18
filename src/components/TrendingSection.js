import React from "react";
import TrendingCard from "./TrendingCard";
import TrendingTag from "./TrendingTag";

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
			<div className="trendingOther"></div>
		</div>
	);
}
