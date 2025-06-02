import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";

const Period = () => {
    const {period, setPeriod} = useContext(AppContext)
    // const [period, setPeriod] = useState("");

    const handleChange = event => {
        console.log("Clicked", event.target);
        
        setPeriod(event.target.value);

    }
	return (
		<div className="text-center">
			<h3>Period</h3>
			<ul className="grid w-fit mx-auto gap-2 md:grid-cols-4">
				<li>
					<input
						type="radio"
						id="all"
						name="hosting"
						value="all"
						className="hidden peer"
						checked={period === "all"}
                        onChange={handleChange}
					/>
					<label
						htmlFor="all"
						className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div className="w-full ">All</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="year"
						name="hosting"
						value="year"
						className="hidden peer"
						checked={period === "year"}
                        onChange={handleChange}
					/>
					<label
						htmlFor="year"
						className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div className="w-full ">Year</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="month"
						name="hosting"
						value="month"
						className="hidden peer"
						checked={period === "month"}
                        onChange={handleChange}
					/>
					<label
						htmlFor="month"
						className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div className="w-full ">Month</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="week"
						name="hosting"
						value="week"
						className="hidden peer"
						checked={period === "week"}
                        onChange={handleChange}
					/>
					<label
						htmlFor="week"
						className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<div className="w-full ">Week</div>
					</label>
				</li>
			</ul>

		</div>
	);
};

export default Period;
