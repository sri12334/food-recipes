import dom from '../dom.js' ;

const editHandler = (recipe) => {
    const title = recipe.title;
    const ingredients = recipe.ingredients;
    const instructions = recipe.instructions;
    const image = recipe.image;
    const id = recipe._id;

    dom.title.value = title;
    dom.ingredients.value = ingredients;
    dom.instructions.value = instructions;
    dom.image.value = image;

    dom.btn.innerText = 'Edit';
    document.getElementById(id).classList.add('selected');
    
};

export default editHandler; 