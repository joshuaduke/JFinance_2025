import React from "react";
import { useState, useEffect } from "react";
import AccountCard from "./AccountCard";
import { Link } from "react-router";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const Accounts = () => {
    const [accountData, setAccountData] = useState([]);
    const userId = localStorage.getItem("userid");

    useEffect(() => {
        async function getAccounts() {
			const response = await fetch(`${apiUrl}/api/accounts/${userId}`);
			const data = await response.json();

			setAccountData(data);
		}

        getAccounts();
    }, []);

    return (
        <div className="col-span-12 flex flex-col gap-4 rounded-r-2xl sm:shadow-md sm:shadow-black sm:px-1 sm:col-span-2 sm:row-span-11 sm:mx-0">
            <h3 className="text-2xl text-text">Accounts</h3>
            <Link to="/" className="text-accent bg-secondary text-center p-2 rounded shadow-md ">Add New Account</Link>
            { accountData.map((item) => <AccountCard data={item}/>)}
        </div>
    );
};

export default Accounts;
