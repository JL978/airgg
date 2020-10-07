import React from "react";

export default function BenefitCard({ benefit }) {
	return (
		<div className="benefitCard">
			<h3>{benefit.title}</h3>
			<div>
				<p>{benefit.description}</p>
			</div>
		</div>
	);
}
