import React from "react";
import CategoryCard from "../CategoryCard";
import TrendingTag from "./TrendingTag";
//import TrendingFeaturedCard from "./TrendingFeaturedCard";

import roblox from "../../assets/images/roblox.jpg";
import fortnite from "../../assets/images/fortnite2.jpg";
import gta from "../../assets/images/gta.jpg";
import valorant from "../../assets/images/valorant.jpg";

const dummyTrending = [
	{
		name: "Roblox",
		products: 16298,
		url: roblox,
	},
	{
		name: "Fortnite",
		products: 12642,
		url: fortnite,
	},
	{
		name: "Grand Theft Auto 5",
		products: 5264,
		url: gta,
	},
	{
		name: "Valorant",
		products: 1552,
		url: valorant,
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
					return <CategoryCard game={game} key={index} />;
				})}
			</div>

			<div className="trendTagGrid">
				{dummyOther.map((game, index) => {
					return <TrendingTag game={game} key={index} />;
				})}
				<TrendingTag game={{ name: "Other" }} />
			</div>
		</div>
	);
}
