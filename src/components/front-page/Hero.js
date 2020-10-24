import React from "react";
import survive from "../../assets/images/survive.jpeg";

export default function Hero() {
	return (
		<div
			className="heroSection"
			style={{
				backgroundImage: `url(${survive})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<h1>
				Find amazing in-game perks and unlock them instantly. Support
				independent gamers.
			</h1>
		</div>
	);
}
