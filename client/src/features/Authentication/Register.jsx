import React from 'react'
import Image from "../../assets/jFinanceLogo.png"
import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import { useState } from "react";

const Register = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	async function handleSubmit(formData) {
		console.log("Triggered");
		console.log("Form Data", formData.get("email"));

		//use formData instead of state in order to create user
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			console.log(response.status);
		} catch (error) {
			console.error("Handle Submit", error);
		}
	}
	return (
		<section className="h-screen relative">
			<div>
				<img className="w-full h-[300px]" src={Image} alt="" />
			</div>
			<form
				action={handleSubmit}
				className="flex flex-col bg-white absolute bottom-0 w-full h-[60vh] px-8 rounded-tl-3xl rounded-tr-3xl"
			>
				<h3 className="text-center py-4 text-2xl text-slate-800">
					Create an Account
				</h3>
				<input
					className="bg-white w-full border border-slate-300 shadow-md my-2 rounded-md p-2"
					placeholder="Enter Your Email"
					type="email"
					name="email"
				/>
				<input
					className="bg-white w-full border border-slate-300 shadow-md my-2 rounded-md p-2"
					placeholder="Password"
					type="password"
					name="password"
				/>
				<input
					className="bg-white w-full border border-slate-300 shadow-md my-2 rounded-md p-2"
					placeholder="Confirm Password"
					type="password"
					name="confirm-password"
				/>
				<button
					className="bg-blue-500 w-full text-white shadow-md my-2 rounded-md p-2"
					type="submit"
				>
					Sign Up{" "}
				</button>
				<p className="text-center text-slate-500 my-2">
					Or sign up with
				</p>

				<button className="w-fit self-center shadow-md p-2 mt-2 mb-4  rounded-md ">
					<img src={GoogleIcon} height={20} width={20} alt="" />
				</button>
				<hr className="text-slate-300" />
				<p className="text-center text-slate-500 py-4">
					Already have an account{" "}
					<span className="text-red-700">Sign In</span>
				</p>
			</form>
		</section>
	);
};

export default Register