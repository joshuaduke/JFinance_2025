import React from "react";
import Image from "../../assets/jFinanceLogo.png";
import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
const Register = ({ setIsAuthenticated }) => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(formData) {
		console.log("Triggered");
		console.log(
			"Form Data",
			formData.get("email"),
			formData.get("password")
		);
		const user = {
			username: formData.get("email"),
			password: formData.get("password"),
			firstName: formData.get("firstName"),
			lastName: formData.get("lastName"),
		};

		//use formData instead of state in order to create user
		try {
			const response = await fetch(
				"http://localhost:3000/api/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				}
			);
			console.log(response.status);
			if (response.status == 200) {
				setIsAuthenticated(true);
				navigate("/");
			}
		} catch (error) {
			console.error("Handle Submit", error);
		}
	}
	return (
		<section className="h-screen ">
			<div className="h-screen relative sm:mx-auto lg:w-[35%] 2xl:w-[20%] lg:place-content-center xl:w-[30%]">
				<div>
					<img
						className="w-full h-[300px] lg:mx-auto lg:rounded-4xl lg:w-[200px] lg:h-[200px] lg:mb-6"
						src={Image}
						alt=""
					/>
				</div>
				<form
					action={handleSubmit}
					className="flex flex-col bg-white absolute bottom-0 w-full h-[60vh] px-8 rounded-tl-3xl rounded-tr-3xl lg:static lg:rounded-4xl lg:h-fit"
				>
					<h3 className="text-center py-4 text-2xl text-slate-800">
						Create an Account
					</h3>
					<div className="flex justify-between gap-2">
						<input
							className="bg-white w-[50%] border border-slate-300 shadow-md my-2  rounded-md p-2"
							placeholder="First Name"
							type="text"
							name="firstName"
						/>
						<input
							className="bg-white w-[50%] border border-slate-300 shadow-md my-2 rounded-md p-2"
							placeholder="Last Name"
							type="text"
							name="lastName"
						/>
					</div>
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
						<Link className="text-red-700" to="/login">
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Register;
