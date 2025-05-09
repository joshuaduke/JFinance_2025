import { useState } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import NavMenu from "./features/NavMenu/NavMenu";
import CashFlow from "./features/CashFlow/CashFlow";
import Actions from "./features/Actions/Actions";
import Transactions from "./features/Transactions/Index";
import Expenses from "./features/ExpensesGraph/Expenses";
import Networth from "./features/Networth/Networth";
import Goals from "./features/Goals/Goals";

function App() {
  return (
    <>
      <main className="grid grid-cols-12 grid-rows-12 gap-4 h-screen">
        <Header />
        <NavMenu />
        <CashFlow />
        <Actions />
        <Transactions />
        <Expenses />
        <Networth />
        <Goals />
      </main>
    </>
  );
}

export default App;
