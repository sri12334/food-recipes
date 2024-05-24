import deleteRecipe from '../../apis/deleteRecipe.js';

const deleteHandler = async (id) => {
    document.getElementById (id).remove();
    const res = await deleteRecipe(id);
    console.log(res);
};

export default deleteHandler;