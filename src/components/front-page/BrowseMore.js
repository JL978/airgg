import React from "react";
import ProductRow from "../ProductRow";

const dummyBrowse = [
	{
		category: "Best Selling",
		products: [
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
		],
	},
	{
		category: "Valuable under $25",
		products: [
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
		],
	},
	{
		category: "Latest Release",
		products: [
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
			},
			{
				name: "Legendary Adopt Me Something Something",
				seller: "rez",
				price: 12.75,
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
