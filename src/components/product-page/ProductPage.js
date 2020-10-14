import React from "react";

export default function ProductPage() {
	return (
		<div className="productPageWrapper">
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
					<div className="delivery">
						<h2>Delivery Time</h2>
						<p>Seller Average</p>
						<p>Guaranteed</p>
					</div>
					<div className="cta">
						<button>Purchase</button>
						<small>You won't be charged yet</small>
					</div>
					<div className="other">
						<div className="line">
							<p>Shop</p>
							<p>TOMMY</p>
						</div>
						<div className="line">
							<p>Stock</p>
							<p>1</p>
						</div>
						<div className="line">
							<p>Feedback</p>
							<p>0</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
