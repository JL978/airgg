import React from "react";
import ProductCard from "./ProductCard";

export default function ProductRow({ info }) {
	return (
		<div className="productRow">
			<h2 className="category">{info.category}</h2>
			<div className="productGrid">
				{info.products.map((product, index) => {
					return <ProductCard product={product} key={index} />;
				})}
			</div>
		</div>
	);
}
