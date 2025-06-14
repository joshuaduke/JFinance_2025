import React, { useEffect, useState } from "react";
import GoalItem from "./GoalItem";

const Goals = () => {
	const [goals, setGoals] = useState([]);

	useEffect(() => {
		const URL = "http://localhost:3000/api/goals";
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				//console.log("Response", data);
				setGoals(data);
			});
	}, []);

	return (
		<div className="col-span-12 sm:col-span-4 sm:row-span-4 shadow-lg rounded-2xl overflow-auto pt-2 pb-4 px-4 bg-white">
			<h3>My Goals</h3>

			<div
				className="rounded-lg px-2 py-2"
				style={{ backgroundColor: "#e9e9e9" }}
			>
				{goals.map((data, index) => (
					<GoalItem key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default Goals;

// const goalData = [
// 	{
// 		startDate: "2022-04-01T04:00:00.000Z",
// 		name: "TFSA",
// 		description: "Tax Free Savings Account",
// 		icon: "",
// 		dueDate: "",
// 		completedDate: "",
// 		startingAmount: 0,
// 		goalAmount: 70000,
// 		subCategory: "TFSA",
// 	},
// 	{
// 		startDate: "2022-04-01T04:00:00.000Z",
// 		name: "FHSA",
// 		description: "First Home Savings Account",
// 		icon: "",
// 		dueDate: "",
// 		completedDate: "",
// 		startingAmount: 0,
// 		goalAmount: 40000,
// 		subCategory: "FHSA",
// 	},
// 	{
// 		startDate: "2022-04-01T04:00:00.000Z",
// 		name: "Emergency Fund",
// 		description: "Emergency Fund in case shit hits the fan",
// 		icon: "",
// 		dueDate: "",
// 		completedDate: "",
// 		startingAmount: 0,
// 		goalAmount: 20000,
// 		subCategory: "EMERGENCY_FUND",
// 	},
// 	{
// 		startDate: "2022-04-01T04:00:00.000Z",
// 		name: "Car Downpayment",
// 		description: "For future car downpayment, maintenance, etc",
// 		icon: "",
// 		dueDate: "",
// 		completedDate: "",
// 		startingAmount: 0,
// 		goalAmount: 50000,
// 		subCategory: "EQ_CAR",
// 	},
// 	{
// 		startDate: "2022-04-01T04:00:00.000Z",
// 		name: "Apartment Costs",
// 		description:
// 			"3 months worth of rent, and costs for furniture and apartment appliances",
// 		icon: "",
// 		dueDate: "",
// 		completedDate: "",
// 		startingAmount: 0,
// 		goalAmount: 12000,
// 		subCategory: "EQ_APARTMENT",
// 	},
// ];


