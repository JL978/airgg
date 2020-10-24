import React from "react";

export default function CategoryCard({ game }) {
	return (
		<div className="categoryCard">
			<div
				className="cardImage"
				style={{
					backgroundImage: `url(${game.url})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>
			<h2 className="ellipsis-one-line">{game.name}</h2>
			<p>{game.products} products</p>
		</div>
	);
}
