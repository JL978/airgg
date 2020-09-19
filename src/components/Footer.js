import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className="footerWrapper">
				<div className="info">
					<h1>Aired</h1>
					<p>
						Aired is a gaming marketplace allowing creators, developers, and
						gamers to buy and sell their in-game goods.
					</p>
					<p className="marking">T | Y | I | D</p>
				</div>

				<div className="links">
					<div className="linkColumn">
						<h4>Company</h4>
						<ul>
							<li>
								<a href="/">About Us</a>
							</li>
							<li>
								<a href="/">Newsroom</a>
							</li>
							<li>
								<a href="/">Careers</a>
							</li>
							<li>
								<a href="/">Aired Plus</a>
							</li>
						</ul>
					</div>
					<div className="linkColumn">
						<h4>Products</h4>
						<ul>
							<li>
								<a href="/">E-Commerce</a>
							</li>
							<li>
								<a href="/">Payments</a>
							</li>
							<li>
								<a href="/">Dashboard</a>
							</li>
							<li>
								<a href="/">Developers</a>
							</li>
							<li>
								<a href="/">Security</a>
							</li>
						</ul>
					</div>
					<div className="linkColumn">
						<h4>Help</h4>
						<ul>
							<li>
								<a href="/">Knowledge Base</a>
							</li>
							<li>
								<a href="/">Terms of Use</a>
							</li>
							<li>
								<a href="/">Privacy Policy</a>
							</li>
							<li>
								<a href="/">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mailList">
					<h4>Join our mailing list</h4>
					<p>Subscribe for updates on new posts & features</p>
					<div className="form">
						<input className="no-outline" placeholder="yourname@example.com" />
						<button className="button button-small no-outline">></button>
					</div>
				</div>
				<div className="additionalMarking">
					<p>United States | English (US) | $ (USD)</p>
					<p>© 2020, Home Bridge, LLC dba Aired</p>
				</div>
			</div>
		</footer>
	);
}
