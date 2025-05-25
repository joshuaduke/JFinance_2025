import React from "react";

const ProgressBar = ({ percentage }) => {
	return (
		<div className="w-[98%] h-2 bg-gray-200 rounded-full dark:bg-gray-700 mx-auto">
			<div
				className="h-2 bg-blue-600 font-medium text-blue-100 text-center place-center leading-none rounded-full"
				style={{ width: `${percentage}%`, fontSize: "8px" }}
			>
				<p className="place-center">{Math.round(percentage)}%</p>
			</div>
		</div>
	);
};

export default ProgressBar;
