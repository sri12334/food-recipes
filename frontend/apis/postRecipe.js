const postRecipe = async (recipe) => {
    try {
        const res = await fetch('http://localhost:5002', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        });

        if (!res.ok) {
            throw new Error(`Failed to post recipe with status ${recipe}`);
        }

        return res.json()
    } catch (err) {
        console.log(err);
    }
};

export default postRecipe;