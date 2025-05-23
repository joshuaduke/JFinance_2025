import React from "react";

const NavMenu = () => {
	return (
		<div className="col-span-2 row-span-12 rounded-r-2xl shadow-md bg-white">
			<nav className="flex flex-col h-full p-6">
				<ul className="">
					<h2>MENU</h2>
					<li>Dashboard</li>
					<li>Wallet</li>
					<li>Goals</li>
				</ul>

				<ul className="mt-10">
					<h2>SETTINGS</h2>
					<ul>
						<li>Settings</li>
						<li>Support</li>
					</ul>
				</ul>
			</nav>
		</div>
	);
};

export default NavMenu;
