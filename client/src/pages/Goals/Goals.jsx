import React from 'react'
import FooterNavMenu from '../../features/NavMenu/footerNaVMenu'
import Header from "../../features/Header/Header";
import Budgets from "./Budgets/Budgets";

const Goals = () => {
  return (
		<section>
			<Header />
			<Budgets />
			<FooterNavMenu />
		</section>
  );
}

export default Goals