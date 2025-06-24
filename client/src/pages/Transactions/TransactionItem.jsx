import React, { useState, useEffect } from "react";
import CategoryIcon from "../../components/CategoryIcon";
import { formatCurrency } from "../../helpers/currency";
import { format } from "date-fns";


const TransactionItem = ({ data, collectionData }) => {
	const [isEdit, setIsEdit] = useState(false);
	console.log("Data", data);
	console.log("Collections", collectionData);
	const { accountsData, categoryData } = collectionData;
	console.log("Accounts Data", accountsData);

    const [form, setForm] = useState({
        account: data.account,
        name: data.name,
        category: data.category,
        importance: data.importance,
        date: format(data.date, "yyyy-MM-dd"),
        cost: data.cost,
        description: data?.description
    })

	function handleChange(e) {
        console.log(`name: ${e.target.name} - value : ${e.target.value}`)
        setForm({...form, [e.target.name]: e.target.value})
    }

	function toggleEdit() {
		setIsEdit(!isEdit);
	}

    function handleSubmit(e){
        e.preventDefault();
        const submitter = e.nativeEvent.submitter;

        if(submitter && submitter.name === "save"){
            updateTransaction();
        } else if (submitter && submitter.name === "delete"){
            deleteTransaction();
            
        }
    }

    async function updateTransaction(){
        try {
            fetch(`http://localhost:3000/api/transactions/${data._id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }).then( response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
            }).then(data => { 
                console.log("Success:", data)
                toggleEdit();
            }).catch(error => console.error("Error:", error));

        } catch (error) {
            console.error("Error in updateTransaction()", error)
        }
    }

    async function deleteTransaction(){
        try {
            fetch(`http://localhost:3000/api/transactions/${data._id}`, {
                method: 'DELETE'
            }).then( response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
            }).then(data => { console.log("Successfully deleted:", data) }).catch(error => console.error("Error:", error));

        } catch (error) {
            console.error("Error in deleteTransaction()", error)
        }
    }


	return (
		<>
			{isEdit == false ? (
				<div
					className=" py-2 px-2 hover:bg-gray-200"
					onClick={toggleEdit}
				>
					<div className="flex justify-between">
						<div className="flex pr-2 md:flex-1">
							<CategoryIcon category={data.category} />
							<div className="px-2 md:grid md:grid-cols-3 md:w-[90%]">
								<p className="hidden text-sm md:place-content-center md:block">
									{form.category}
								</p>
								<p className="text-sm md:place-content-center">
									{data.name.substring(0, 20)}
								</p>
								<p className="text-xs self-center bg-gray-200 w-fit p-1 rounded-md md:">
									{data.account.toLowerCase()}
								</p>
							</div>
						</div>

						<p
							className="self-center px-2"
							style={{
								color: data.cost < 0 ? "#CC0000" : "#108B10",
							}}
						>
							{formatCurrency(data.cost)}
						</p>
					</div>
				</div>
			) : (
				<div className="py-2 px-2">
					<form onSubmit={handleSubmit}>
						<div className="flex justify-between">
							<div className="flex flex-col">
								<label htmlFor="category" className="opacity-70 text-sm">Category</label>
								<select
									className="border border-gray-300 rounded-sm py-3 px-2"
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
							<div className="flex flex-col">
								<label htmlFor="subCategory" className="opacity-70 text-sm">Sub Category</label>
								<select
									className="border border-gray-300 rounded-sm py-3 px-2"
									name="subCategory"
									id="subCategory"
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
							<div className="flex flex-col">
								<label htmlFor="date" className="opacity-70 text-sm ">Date</label>
								<input
									className="border border-gray-300 rounded-sm py-3 px-2"
									type="date"
                                    name="date"
                                    id="date"
									value={form.date}
									onChange={handleChange}
								/>
							</div>

							<div className="flex flex-col">
								<label htmlFor="description" className="opacity-70 text-sm">Description</label>
								<input
									className="border border-gray-300 rounded-sm py-3 px-2"
									name="description"
									id="description"
									value={form.description}
									onChange={handleChange}
								/>
							</div>

							<div className="flex flex-col">
								<label htmlFor="importance" className="opacity-70 text-sm">Importance</label>
								<select
									className="border border-gray-300 rounded-sm py-3 px-2"
									name="importance"
									id="importance"
									value={form.importance}
									onChange={handleChange}
								>
									<option value="none">
										-- Select One --
									</option>
									<option value="Essential">Essential</option>
									<option value="Have To Have">
										Have to Have
									</option>
									<option value="Nice To Have">
										Nice to Have
									</option>
									<option value="Shouldn't Have">
										Shouldn't Have
									</option>
								</select>
							</div>

							<div className="flex flex-col">
								<label htmlFor="account" className="opacity-70 text-sm">Account</label>
								<select
									className="border border-gray-300 rounded-sm py-3 px-2"
									name="account"
									id="account"
									value={form.account}
									onChange={handleChange}
								>
									<option>-- Select One --</option>
									{accountsData?.map((account) => (
										<option
											key={account._id}
											value={account.name}
										>
											{account.name}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col">
								<label htmlFor="cost" className="opacity-70 text-sm">Amount</label>
								<input
									className="border border-gray-300 rounded-sm py-3 px-2"
									type="text"
                                    name="cost"
                                    id="cost"
									value={form.cost}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="flex justify-end gap-2 my-4">
							<button name="save" type="submit" className="bg-blue-300 py-3 px-4 rounded-md">
								Save Changes
							</button>
							<button name="delete" type="submit" className="bg-blue-300 py-3 px-4 rounded-md">
								Delete Transaction
							</button>

							<button
								className="bg-blue-300 py-3 px-4 rounded-md"
								onClick={toggleEdit}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default TransactionItem;
