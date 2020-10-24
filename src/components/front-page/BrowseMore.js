import React from "react";
import ProductRow from "../ProductRow";

import turkey from "../../assets/images/adoptme_turkey.png";
import unicorn from "../../assets/images/adoptme_unicorn.png";
import fortnite from "../../assets/images/fortnite.jpg";
import fortnite2 from "../../assets/images/fortnite2.jpg";
import coc from "../../assets/images/coc.jpg";
import gta from "../../assets/images/gta2.jpg";
import valorant from "../../assets/images/valorant.jpg";
import valorant2 from "../../assets/images/valorant2.png";

const dummyBrowse = [
	{
		category: "Best Selling",
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
	},
	{
		category: "Valuable under $25",
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
	},
	{
		category: "Latest Release",
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
	},
];

export default function BrowseMore() {
	return (
		<div className="browseMore">
			{dummyBrowse.map((info, index) => {
				return <ProductRow info={info} key={index} />;
			})}
		</div>
	);
}
