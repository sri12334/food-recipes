const getRecipes = async () => {
    try {
        const res = await fetch('http://localhost:5002')

        if (!res.ok) {
            throw new Error(`faield to Fetch recipes ${res.status}`)
        }

        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export default getRecipes;