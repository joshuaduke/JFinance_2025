import React from "react";
import Image from "../../assets/jFinanceLogo.png";

const Header = () => {
	return (
		<section className="col-span-12 row-span-1 row-end-1 flex justify-between items-center border-b border-gray-300">
			<div className=" ">
				{/* <h1 className="px-4 text-sm sm:text-xl sm:px-8">J-FINANCE</h1> */}
				<img
					className="max-w-[300px] max-h-[100px]"
					src={Image}
					alt=""
				/>
			</div>
			<div className="flex" id="user-details">
				<div className="m-2 leading-none">
					<p className="text-sm sm:text:md">Full Name</p>
					<p className="text-[10px] text-gray-400">@Username</p>
				</div>
				<button className="bg-blue-600 text-white rounded-lg px-2 my-2 sm:mx-8">
					Logout
				</button>
			</div>
		</section>
	);
};

export default Header;
