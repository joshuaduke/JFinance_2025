const apiUrl = import.meta.env.VITE_APP_API_URL;
const userid = localStorage.getItem("userid");

export async function getAccounts() {
	try {
		const response = await fetch(`${apiUrl}/api/accounts/${userid}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getCategories() {
	try {
		const response = await fetch(`${apiUrl}/api/categories/${userid}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}
