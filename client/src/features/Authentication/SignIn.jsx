import React from "react";
import Image from "../../assets/jFinanceLogo.png";
import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg";
import { Link, useNavigate } from "react-router";

const SignIn = ({ setIsAuthenticated, setUserId }) => {
	let navigate = useNavigate();

	async function handleSubmit(formData) {
		console.log("Triggered");
		console.log("Form Data", formData.get("email"));

		const user = {
			username: formData.get("email"),
			password: formData.get("password"),
		};
		try {
			const response = await fetch(
				`http://localhost:3000/api/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				}
			);
			const data = await response.json();
			localStorage.setItem("token", data.token);
			localStorage.setItem("userid", data.userId);
			console.log("Response", data);
			if (response.status == 200) {
				setIsAuthenticated(true);
				setUserId(data.userId);
				navigate("/");
			}
		} catch (error) {
			console.error("Handle Submit", error);
		}
	}
	return (
		<section className="h-screen bg-primary">
			<div className="h-screen relative sm:mx-auto xl:w-[30%] 2xl:w-[20%] xl:place-content-center">
				<div>
					<img
						className="w-full h-[300px] lg:mx-auto lg:rounded-4xl lg:w-[200px] lg:h-[200px] lg:mb-6"
						src={Image}
						alt=""
					/>
				</div>
				<form
					action={handleSubmit}
					className="flex flex-col bg-blank absolute bottom-0 w-full h-[60vh] px-8 rounded-tl-3xl rounded-tr-3xl lg:static lg:rounded-4xl lg:h-fit"
				>
					<h3 className="text-center py-4 text-2xl text-primary">
						Sign into your account
					</h3>
					<input
						className="bg-blank w-full border border-text shadow-md my-2 rounded-md p-2"
						placeholder="Enter Your Email"
						type="email"
						name="email"
					/>
					<input
						className="bg-blank w-full border border-text shadow-md my-2 rounded-md p-2"
						placeholder="Password"
						type="password"
						name="password"
					/>
					<Link className="text-right text-danger my-2">
						Forgot Password?
					</Link>
					<button
						className="border-primary bg-accent text-primary w-full shadow-md my-2 rounded-md p-2"
						type="submit"
					>
						Sign In{" "}
					</button>
					<p className="text-center text-primary my-2">
						Or sign in with
					</p>

					<button className="w-fit self-center shadow-md p-2 mt-2 mb-4  rounded-md ">
						<img src={GoogleIcon} height={20} width={20} alt="" />
					</button>
					<hr className="text-text" />
					<p className="text-center text-primary py-4">
						Don't have an account?{" "}
						<Link className="text-danger" to="/register">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
