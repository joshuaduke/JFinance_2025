import React from "react";
import Image from "../../assets/jFinanceLogo.png";
import Logout from "../Authentication/Logout";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import { NavLink } from "react-router";

const Header = () => {
	const { userData, setUserData } = useContext(AppContext);

	return (
		<section className="col-span-12 row-span-1 row-end-1 flex basis-1 justify-between items-center border-b border-gray-300">
			<div className="basis-1/3">
				{/* <h1 className="px-4 text-sm sm:text-xl sm:px-8">J-FINANCE</h1> */}
				<img
					className="max-w-[300px] max-h-[100px]"
					src={Image}
					alt=""
				/>
			</div>
			<nav className="basis-1/3">
				<ul className="hidden lg:flex lg:justify-between">
					<li>
						<NavLink to="/">Dashboard</NavLink>
					</li>
					<li>
						<NavLink to="/expenses">Expenses</NavLink>
					</li>
					<li>
						<NavLink to="/accounts">Accounts</NavLink>
					</li>
					<li>
						<NavLink to="/goals">Goals</NavLink>
					</li>
				</ul>
			</nav>
			<div className="basis-1/3" id="user-details">
				<div className="flex justify-end">
					<div className="m-2 leading-none">
						<p className="text-sm sm:text:md">
							{userData?.firstName} {userData?.lastName}
						</p>
						<p className="text-[10px] text-gray-400">
							{userData?.username}
						</p>
					</div>
					<Logout />
				</div>
			</div>
		</section>
	);
};

export default Header;
