const apiUrl = import.meta.env.VITE_APP_API_URL;
// const userid = localStorage.getItem("userid");

export async function getAccounts(authUserId) {
	console.log("trigger getAccounts", authUserId);

	try {
		const response = await fetch(`${apiUrl}/api/accounts/${authUserId}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getCategories(authUserId) {
	try {
		const response = await fetch(`${apiUrl}/api/categories/${authUserId}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

// export function getSubCategories(categoryData, category) {
// 	let savingsArr = categoryData?.find((element) => element.name === category);

// 	return savingsArr?.subCategory;
// }
