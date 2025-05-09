import React from "react";

const Header = () => {
  return (
    <section className="col-span-12 flex justify-between items-center border-b border-gray-300">
      <div className="bg-red-400 ">
        <h1 className="px-8 text-xl">J-FINANCE</h1>
      </div>
      <div className="flex" id="user-details">
        <div className="my-2 leading-none">
          <p>Full Name</p>
          <p className="text-xs text-gray-400">@Username</p>
        </div>
        <button className="bg-green-500 rounded-lg px-2 my-2 mx-8">
          Logout
        </button>
      </div>
    </section>
  );
};

export default Header;
