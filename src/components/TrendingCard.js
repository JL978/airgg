import React from "react";

export default function TrendingCard({ game }) {
	return (
		<div className="trendingCard">
			<div className="cardImage"></div>
			<h2>{game.name}</h2>
			<p>{game.products} products</p>
		</div>
	);
}
