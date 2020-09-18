import React from "react";

export default function TrendingTag({ game }) {
	return (
		<div className="button button-trend">
			<p>{game.name}</p>
			{game.products ? (
				<span className="number">
					<p>{game.products}</p>
				</span>
			) : null}
		</div>
	);
}
