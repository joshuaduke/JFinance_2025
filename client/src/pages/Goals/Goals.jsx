import FooterNavMenu from "../../features/NavMenu/footerNaVMenu";
import Header from "../../features/Header/Header";
import Budgets from "./Budgets/Budgets";
import Savings from "./Savings/Savings";
import { useState } from "react";

const Goals = () => {
	const [toggleGoal, settoggleGoal] = useState("budget");

	return (
		<section>
			<Header />
			<div>
				{/* create functionality to toggle between budget and savings views */}
				<ul className="grid w-fit mx-auto gap-2 grid-cols-4">
					<li>
						<input
							type="radio"
							id="budgets"
							name="budgets"
							value="budget"
							className="hidden peer"
							checked={toggleGoal === "budget"}
							onChange={() => settoggleGoal("budget")}
						/>
						<label
							htmlFor="budgets"
							onChange={() => settoggleGoal("budget")}
							className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<div className="w-full ">Budgets</div>
						</label>
					</li>
					<li>
						<input
							type="radio"
							id="savings"
							name="savings"
							value="saving"
							className="hidden peer"
							checked={toggleGoal === "saving"}
							onChange={() => settoggleGoal("saving")}
						/>
						<label
							htmlFor="savings"
							onChange={() => settoggleGoal("saving")}
							className="inline-flex  items-center w-fit min-w-[75px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<div className="w-full ">Savings</div>
						</label>
					</li>
				</ul>
			</div>
			{toggleGoal === "budget" ? <Budgets /> : <Savings />}

			<FooterNavMenu />
		</section>
	);
};

export default Goals;
