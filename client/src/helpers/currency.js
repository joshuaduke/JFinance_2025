export function formatCurrency(numCurrency) {
	const FormattedCurrency = new Intl.NumberFormat("en-CA", {
		style: "currency",
		currency: "CAD",
	});

	let strFormattedCurrency = "";
	if (numCurrency < 0) {
		strFormattedCurrency = `${FormattedCurrency.format(numCurrency)}`;
	} else {
		strFormattedCurrency = `${FormattedCurrency.format(numCurrency)}`;
	}

	return strFormattedCurrency;
}

export function calculateTransactionsByDate(arrtransactions) {
	let result = arrtransactions.reduce((acc, curr) => acc + curr.cost, 0);

	return result;
}
