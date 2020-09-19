import React from "react";

export default function CategoryCard({ game }) {
	return (
		<div className="categoryCard">
			<div className="cardImage"></div>
			<h2>{game.name}</h2>
			<p>{game.products} products</p>
		</div>
	);
}
