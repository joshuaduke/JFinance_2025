import React from "react";

const ProgressBar = ({ percentage }) => {
	let percentageWidth = percentage;
	if (percentage > 100) {
		percentageWidth = 100;
	}
	return (
		<div className="w-[98%] bg-secondary rounded-sm dark:bg-primary mx-auto ">
			<div
				className="bg-accent py-2 font-medium text-secondary text-center place-center leading-none rounded-sm text-[8px] sm:text-[20px]"
				style={{ width: `${percentageWidth}%` }}
			>
				<p className="px-2">{Math.round(percentage)}%</p>
			</div>
		</div>
		// <div className="w-[98%] bg-secondary rounded-full dark:bg-primary mx-auto ">
		// 	<div
		// 		className="bg-accent font-medium text-secondary text-center place-center leading-none rounded-full text-[8px] sm:text-[10px]"
		// 		style={{ width: `${percentageWidth}%` }}
		// 	>
		// 		<p className="px-2">{Math.round(percentage)}%</p>
		// 	</div>
		// </div>
	);
};

export default ProgressBar;
