import React, { useState } from "react";

import Icon from "./icons";

export default function Navbar({ children }) {
	const [query, setQuery] = useState("");
	const [popUp, setpopUp] = useState(false);

	return (
		<div className="navBar">
			<h1 className="logo">Logo here</h1>

			<div className="searchBar">
				<div className="iconDiv">
					<Icon name="Search" />
				</div>
				<input
					className="searchInput no-outline"
					maxLength="80"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					placeholder="Search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div className={`popUpItems ${popUp ? "open" : ""}`}>
				<div className="navLinks">
					<ul>
						{children.map((component) => (
							<li>{component}</li>
						))}
					</ul>
				</div>

				<div className="actionItems">
					<button className="button no-outline">Sell</button>

					<button className="button button-secondary no-outline">
						Sign In
					</button>
				</div>
			</div>

			<div className="mobileButtons">
				{/* <button className="button-search">
					<Icon name="Search" />
				</button> */}
				<button
					className="button-burger no-outline"
					onClick={() => setpopUp(!popUp)}
				>
					<div className={`burger ${popUp ? "close" : ""}`}></div>
				</button>
			</div>
		</div>
	);
}
