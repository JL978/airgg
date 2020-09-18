import React from "react";

export default function TrendingFeaturedCard({ feature }) {
	return (
		<div className="trendingFeaturedCard">
			<div className="featuredImg"></div>
			<h2>{feature.title}</h2>
			<p>{feature.description}</p>
			<div className="ctaWrapper">
				<a href="/">{feature.cta}</a>
			</div>
		</div>
	);
}
