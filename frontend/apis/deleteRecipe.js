const deleteRecipe = async (id) => {
    try {
        const res = await fetch(`http://localhost:5002/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            throw new Error(`failed to delete the recipe with status ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

export default deleteRecipe;