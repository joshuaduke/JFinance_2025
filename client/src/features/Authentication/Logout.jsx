import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
    const navigate = useNavigate();
    //server logout not necessary
    function handleLogout() {
		localStorage.removeItem("token");
		localStorage.removeItem("userid");
		window.location.reload();
	}

	return (
		<button
			onClick={handleLogout}
			className="bg-secondary text-accent rounded-lg px-2 my-2 sm:mx-8 lg:mr-0"
		>
			Logout
		</button>
	);
};

export default Logout;
