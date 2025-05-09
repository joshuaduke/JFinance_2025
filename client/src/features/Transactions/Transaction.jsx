import React from "react";
import { myIcons } from "../../assets/CategoryIcons";

const Transaction = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="bg-red-500 rounded-md"
        >
          <path d="M18.25 3.25a.75.75 0 0 1 .743.648L19 4v16a.75.75 0 0 1-1.493.102L17.5 20v-5h-2.25a.75.75 0 0 1-.743-.648l-.007-.102V7a3.75 3.75 0 0 1 3.75-3.75Zm-6 0a.75.75 0 0 1 .743.648L13 4v4c0 1.953-1.4 3.578-3.25 3.93V20a.75.75 0 0 1-1.493.102L8.25 20v-8.07a4.002 4.002 0 0 1-3.245-3.722L5 8V4a.75.75 0 0 1 1.493-.102L6.5 4v4c0 1.12.736 2.067 1.75 2.386V4a.75.75 0 0 1 1.493-.102L9.75 4v6.385a2.502 2.502 0 0 0 1.743-2.2L11.5 8V4a.75.75 0 0 1 .75-.75ZM17.5 13.5V4.878a2.252 2.252 0 0 0-1.494 1.95L16 7v6.5h1.5V4.878V13.5Z" />
        </svg>
        <div>
          <p>Food</p>
          <p>Wallet</p>
        </div>
      </div>
      <div>
        <p className="">$5000</p>
      </div>
    </div>
  );
};

export default Transaction;
