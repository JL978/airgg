import React from "react";

export default function FeaturedCard({ feature }) {
	return (
		<div className="featuredCard">
			<a href="/">
				<div
					className="featuredImg"
					style={{
						backgroundImage: `url(${feature.image})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				></div>
			</a>
			<a href="/">
				<h2>{feature.title}</h2>
			</a>
			<div className="descriptionWrapper">
				<p>{feature.description}</p>
			</div>

			<div className="ctaWrapper">
				<a href="/">{feature.cta}</a>
			</div>
		</div>
	);
}
