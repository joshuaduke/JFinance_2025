
export async function getAccounts() {
    try {
        const response = await fetch("http://localhost:3000/api/accounts")
        const data = await response.json();
        
        return data;

    } catch (error) {
        console.error(error);
    }
}

export async function getCategories() {
    try {
        const response = await fetch("http://localhost:3000/api/categories")
        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.error(error);
    }
}

