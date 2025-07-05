import React from "react";
import { useState, useEffect } from "react";
import { getAccounts, getCategories } from "../../helpers/getters";
const apiUrl = import.meta.env.VITE_APP_API_URL;
import { Navigate, useNavigate } from "react-router";
import FooterNavMenu from "../../features/NavMenu/FooterNavMenu";
import Header from "../../features/Header/Header";
import { getTransactionsByPeriod } from "../../helpers/dates";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";

const NewTransaction = () => {
    const navigate = useNavigate()
	const { setTransactions } = useContext(AppContext);
	const [accountData, setAccountData] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	const [subCategoryData, setSubCategoryData] = useState(null);
	const authUserId = localStorage.getItem("userid");
	const [form, setForm] = useState({
		userID: authUserId,
		name: "",
		description: "",
		category: "",
		subCategory: "",
		cost: 0,
		importance: "",
		account: "",
		date: "",
	});

	console.log("UseriD", authUserId);

	useEffect(() => {
		async function fetchData() {
			try {
				const accounts = await getAccounts(authUserId);

				setAccountData(accounts);
				const categories = await getCategories(authUserId);

				setCategoryData(categories);
			} catch (error) {
				console.error(
					"Error in retrieving collection data for new transaction",
					error
				);
			}
		}

		fetchData();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		let updatedForm = { ...form };

		if (updatedForm.category !== "PAYMENT") {
			updatedForm.cost = -Math.abs(Number(updatedForm.cost));
			console.log("Not a payment. Cost adjusted:", updatedForm.cost);
		} else {
			updatedForm.cost = Math.abs(Number(updatedForm.cost));
		}

		console.log("Submitting Form Data", updatedForm);

		try {
			fetch(`${apiUrl}/api/transactions`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedForm),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(
							`HTTP error! status: ${response.status}`
						);
					}
					return response.json();
				})
				.then((data) => {
					// retrieve list of transactions for this month and update context transactions so that state changes are reflected on the page
					const { periodStartDate, periodEndDate, dateName } =
						getTransactionsByPeriod("month", null, null);
					const URL = `${apiUrl}/api/transactions/${authUserId}/${periodStartDate}/${periodEndDate}`;
					fetch(URL)
						.then((response) => response.json())
						.then((data) => {
							setTransactions(data);
							navigate("/expenses");
						});
				})
				.catch((error) =>
					console.error("Add new transaction Error:", error)
				);
		} catch (error) {
			console.error("Error in new Transaction handlesubmit()", error);
		}
	}

	function handleChange(e) {
		if ([e.target.name] == "category") {
			let categoryType = e.target.value;
			let savingsArr = categoryData.find(
				(element) => element.name === categoryType
			);
			setSubCategoryData(savingsArr.subCategory);
		}

		if ([e.target.name] == "cost") {
		}

		setForm({ ...form, [e.target.name]: e.target.value });
	}

	console.log("Account Data", accountData);
	console.log("Category Data", categoryData);

	// console.log("savingsArr", savingsArr.subCategory);

	return (
		<section className="h-screen bg-primary">
			<Header />
			<div className="h-screen relative sm:mx-auto lg:w-[35%] 2xl:w-[20%] lg:place-content-center xl:w-[30%]">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col bg-blank absolute bottom-20 w-full px-8 rounded-tl-3xl rounded-tr-3xl lg:static lg:rounded-4xl lg:h-fit"
				>
					<h3 className="text-center py-4 text-2xl text-slate-800">
						Add New Transaction
					</h3>

					<label htmlFor="name">Transaction Name</label>

					<input
						className="bg-blank border border-text shadow-md my-2  rounded-md p-2"
						placeholder="Name"
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>

					<label htmlFor="name">Transaction Description</label>
					<textarea
						name="description"
						id="description"
						className="bg-blank border border-text shadow-md my-2 rounded-md p-2"
						value={form.description}
						onChange={handleChange}
					></textarea>

					<label
						htmlFor="date"
						className="text-primary opacity-70 text-sm "
					>
						Date
					</label>
					<input
						className="text-text border border-gray-300 rounded-sm py-3 px-2"
						type="date"
						name="date"
						id="date"
						value={form.date}
						onChange={handleChange}
					/>

					{/* Category Selection */}
					<div className="flex flex-col">
						<label
							htmlFor="category"
							className="text-accent opacity-70 text-sm"
						>
							Category
						</label>
						<select
							className="text-text  border border-gray-300 rounded-sm py-3 px-2"
							name="category"
							id="category"
							value={form.category}
							onChange={handleChange}
						>
							<option>-- Select One --</option>
							{categoryData?.map((category) => (
								<option
									key={category._id}
									value={category.name}
								>
									{category.name}
								</option>
							))}
						</select>
					</div>

					{/* Sub Categories */}
					{subCategoryData && (
						<div className="flex flex-col">
							<label
								htmlFor="subCategory"
								className="text-accent opacity-70 text-sm"
							>
								Sub Category
							</label>
							<select
								className="text-text  border border-gray-300 rounded-sm py-3 px-2"
								name="subCategory"
								id="subCategory"
								value={form.subCategory}
								onChange={handleChange}
							>
								<option>-- Select One --</option>
								{subCategoryData?.map((category) => (
									<option
										// key={category._id}
										value={category}
									>
										{category}
									</option>
								))}
							</select>
						</div>
					)}

					{/* ACCOUNT */}
					<label
						htmlFor="account"
						className="text-text opacity-70 text-sm"
					>
						Account
					</label>
					<select
						className="text-text border border-gray-300 rounded-sm py-3 px-2"
						name="account"
						id="account"
						value={form.account}
						onChange={handleChange}
					>
						<option>-- Select One --</option>
						{accountData?.map((account) => (
							<option key={account._id} value={account.name}>
								{account.name}
							</option>
						))}
					</select>

					<label htmlFor="cost">Amount</label>
					<input
						className="bg-blank w-full border border-text shadow-md my-2 rounded-md p-2"
						placeholder="0.00"
						type="number"
						name="cost"
						value={form.cost}
						onChange={handleChange}
					/>

					<label
						htmlFor="importance"
						className="text-primary opacity-70 text-sm"
					>
						Importance
					</label>
					<select
						className="text-text border border-gray-300 rounded-sm py-3 px-2"
						name="importance"
						id="importance"
						value={form.importance}
						onChange={handleChange}
					>
						<option value="none">-- Select One --</option>
						<option value="Essential">Essential</option>
						<option value="Have To Have">Have to Have</option>
						<option value="Nice To Have">Nice to Have</option>
						<option value="Shouldn't Have">Shouldn't Have</option>
					</select>

					<button
						className="border border-primary bg-accent w-full text-primary shadow-md my-2 rounded-md p-2"
						type="submit"
					>
						Add Transaction
					</button>
				</form>
			</div>
			<FooterNavMenu />
		</section>
	);
};

export default NewTransaction;
