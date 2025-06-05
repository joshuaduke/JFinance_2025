import React from "react";

const ProgressBar = ({ percentage }) => {
	let percentageWidth = percentage;
	if (percentage > 100) {
		percentageWidth = 100;
	}
	return (
		<div className="w-[98%] bg-gray-200 rounded-full dark:bg-gray-700 mx-auto ">
			<div
				className="bg-blue-600 font-medium text-blue-100 text-center place-center leading-none rounded-full text-[8px] sm:text-[10px]"
				style={{ width: `${percentageWidth}%` }}
			>
				<p className="px-2">{Math.round(percentage)}%</p>
			</div>
		</div>
	);
};

export default ProgressBar;
