import React from "react";
import FeaturedCard from "./FeaturedCard";
import ProductRow from "./ProductRow";

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

const dummyProduct = {
	category: "Featured",
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
