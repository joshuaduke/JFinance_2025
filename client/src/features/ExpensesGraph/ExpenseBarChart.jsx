import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	scales,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import tramsactionsFormatting from '../../helpers/transactionsFormatting'
import {
	getCategorySums,
	getDateSums,
} from "../../helpers/transactionsFormatting";
// import { AppContext } from '../../components/AppContext';
// import { useContext } from 'react';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const ExpenseBarChart = ({ transactions }) => {
	// let {transactions , setTransactions} = useContext(AppContext)

	const transactionData = getCategorySums(transactions);

	const labels = transactionData.map((item) => item.category);
	const values = transactionData.map((item) => item.totalSum);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				text: "This is a chart representing cost per category",
				display: true,
				color: "#ccd6f6",
			},
		},
		scales: {
			x: {
				ticks: {
					color: "#ccd6f6", // Color for X-axis labels
				},
			},
			y: {
				ticks: {
					color: "#ccd6f6", // Color for Y-axis labels
				},
			},
		},
	};
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Expenses",
				data: values,
				backgroundColor: "rgba(100, 255, 218)",
				borderColor: "rgba(255, 255, 255, 1)",
			},
		],
	};

	return (
		<div style={{ height: "380px", width: "100%" }}>
			<Bar options={options} data={data} />
		</div>
	);
};

export default ExpenseBarChart
