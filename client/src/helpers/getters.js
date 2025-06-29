const apiUrl = import.meta.env.VITE_APP_API_URL;

export async function getAccounts() {
	try {
		const response = await fetch(`${apiUrl}/api/accounts`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getCategories() {
	try {
		const response = await fetch(`${apiUrl}/api/categories`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}
