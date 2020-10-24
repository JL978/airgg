import React from "react";

export default function ProductCard({ product }) {
	return (
		<div className="productCard">
			<div
				className="productImg"
				style={{
					backgroundImage: `url(${product.image})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>

			<h3 className="ellipsis-one-line">{product.name}</h3>

			<div className="additionalInfo">
				<p>{product.seller}</p>
				<p className="price">${product.price}</p>
			</div>
		</div>
	);
}
