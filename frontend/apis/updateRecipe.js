const updateRecipe = async (id, recipe) => {
    try {
       const res = await fetch(`http://localhost:5002/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
       })

       if (!res.ok) {
          throw new Error(`faild to update recipe with status ${res.status}`);
       }

       return await res.json();
    } catch (err) {
        console.log(err);
    }
}

export default updateRecipe;