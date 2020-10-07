import React from "react";
import BenefitCard from "./BenefitCard";

const dummyBenefits = [
	{
		title: "Independent sellers",
		description:
			"Buy directly from someone who put their heart and soul into working on something special for you.",
	},
	{
		title: "Delivery time tracking",
		description:
			"Average delivery times of previous orders are always visible, helping buyers know when their items will arrive.",
	},
	{
		title: "Secure shopping",
		description:
			"We use best-in-class technology to protect your transactions.",
	},
];

export default function Benefits() {
	return (
		<div className="benefitsWrapper">
			{dummyBenefits.map((benefit, index) => {
				return <BenefitCard benefit={benefit} key={index} />;
			})}
		</div>
	);
}
