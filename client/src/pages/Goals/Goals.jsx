import FooterNavMenu from "../../features/NavMenu/FooterNavMenu";
import Header from "../../features/Header/Header";
import Budgets from "./Budgets/Budgets";
import Savings from "./Savings/Savings";
import { useState } from "react";

const Goals = () => {
	const [toggleGoal, settoggleGoal] = useState("budget");

	return (
		<section className="mb-18">
			<Header />
			<div>
				{/* create functionality to toggle between budget and savings views */}
				<ul className="grid w-fit mx-auto gap-2 grid-cols-2 my-4">
					<li className="bg-secondary">
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
							className="text-accent py-2 px-4 border rounded-md inline-flex items-center w-fit min-w-[75px] cursor-pointer"
						>
							<div className="w-full ">Budgets</div>
						</label>
					</li>
					<li className="bg-secondary">
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
							className="text-accent py-2 px-4 border rounded-md inline-flex items-center w-fit min-w-[75px] cursor-pointer"
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
