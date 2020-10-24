import React from "react";
import FeaturedCard from "./FeaturedCard";
import ProductRow from "../ProductRow";
import game from "../../assets/images/game.jpg";
import game2 from "../../assets/images/game2.jpg";
import turkey from "../../assets/images/adoptme_turkey.png";
import unicorn from "../../assets/images/adoptme_unicorn.png";
import fortnite from "../../assets/images/fortnite.jpg";
import fortnite2 from "../../assets/images/fortnite2.jpg";
import coc from "../../assets/images/coc.jpg";
import gta from "../../assets/images/gta2.jpg";
import valorant from "../../assets/images/valorant.jpg";
import valorant2 from "../../assets/images/valorant2.png";

const dummyFeatured = [
	{
		title: "Valuable finds under $50",
		description:
			"We round up sellers offering top-notch products at an incredible value. Go ahead, take a peek.",
		cta: "See all",
		image: game,
	},
	{
		title: "Official Aired Team",
		description:
			"Checkout products being sold by the official Aired Team. These products are 100% verified and catered to your needs.",
		cta: "Check it out",
		image: game2,
	},
];

const dummyProduct = {
	category: "Featured",
	products: [
		{
			name: "Legendary Adopt Me Turkey",
			seller: "rez",
			price: 12.75,
			image: turkey,
		},
		{
			name: "OG FORTNITE, 125 ACCOUNTS ACTIVATED",
			seller: "CCCP",
			price: 20.0,
			image: fortnite,
		},
		{
			name: "TH13 WITH 2375 STARS CHAMP",
			seller: "ezpz",
			price: 78.05,
			image: coc,
		},
		{
			name: "7 BILLION 500 LVL PREMIUM VA",
			seller: "TTOT",
			price: 8.79,
			image: gta,
		},
		{
			name: "Neque porro quisquam est qui dolorem",
			seller: "radix",
			price: 20.69,
			image: fortnite2,
		},
		{
			name: "ipsum quia dolor sit amet",
			seller: "rez",
			price: 420.69,
			image: valorant2,
		},
		{
			name: "Lorem ipsum dolor sit amet",
			seller: "ASO",
			price: 5.99,
			image: valorant,
		},
		{
			name: "Unicorn Pet",
			seller: "BloxShop",
			price: 11.5,
			image: unicorn,
		},
	],
};

export default function Featured() {
	return (
		<div className="featuredSection">
			<ProductRow info={dummyProduct} />

			<div className="featuredGrid">
				{dummyFeatured.map((feature, index) => {
					return <FeaturedCard feature={feature} key={index} />;
				})}
			</div>
		</div>
	);
}
