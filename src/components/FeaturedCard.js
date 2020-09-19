import React from "react";

export default function FeaturedCard({ feature }) {
	return (
		<div className="featuredCard">
			<div className="featuredImg"></div>
			<h2>{feature.title}</h2>
			<div className="descriptionWrapper">
				<p>{feature.description}</p>
			</div>

			<div className="ctaWrapper">
				<a href="/">{feature.cta}</a>
			</div>
		</div>
	);
}
