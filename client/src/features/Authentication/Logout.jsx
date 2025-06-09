import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
    const navigate = useNavigate();
    //server logout not necessary
    function handleLogout(){
        // try {
        //     await fetch("http://localhost:3000/api/auth/logout")
        // } catch (error) {
        //     console.log(error);
            
        // }
        localStorage.removeItem('token');
        window.location.reload();
    }

	return (
		<button onClick={handleLogout} className="bg-blue-600 text-white rounded-lg px-2 my-2 sm:mx-8">
			Logout
		</button>
	);
};

export default Logout;
