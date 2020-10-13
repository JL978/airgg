import React from "react";

export default function ProductPage() {
	return (
		<div className="ProductPageWrapper">
			<div className="info">
				<div className="imgWrapper"></div>
				<div className="description">
					<h1>Title</h1>
					<h2>Description</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						nobis dignissimos magnam deserunt quia doloribus aliquid,
						consequatur suscipit illum quasi ea perspiciatis maxime facilis
						assumenda maiores, tenetur sapiente ad minima.
					</p>
				</div>
			</div>
			<div className="technical">
				<div className="price">
					<h2>Price: $50</h2>
				</div>
				<div className="vendor">
					<div className="delivery"></div>
					<div className="cta"></div>
					<div className="info"></div>
				</div>
			</div>
		</div>
	);
}
