import deleteHandler from "../handlers/deleteHandler.js";
import editHandler from "../handlers/editHandler.js";

const createRecipe = (recipe) => {
    // container
    const container = document.createElement('div');
    container.id = recipe._id;
    container.classList.add('recipe');

   // image 
   const image = document.createElement('img');
   image.classList.add('image');
   image.src = recipe.image;
   image.alt = recipe.title;
   
   // text container
   const textContainer = document.createElement('div');
   textContainer.classList.add('text-container');

   // title
   const title = document.createElement('h2');
   title.classList.add('title');
   title.innerHTML = recipe.title;

   // ingredients 
   const ingredients = document.createElement('p');
   ingredients.classList.add('ingredients');
   ingredients.innerText = recipe.ingredients;

   // instructions 
   const instructions = document.createElement('p');
   instructions.classList.add('instructions');
   instructions.innerText = recipe.instructions;

   textContainer.append(title, ingredients, instructions)

   // button container
   const buttonsContainer = document.createElement('div');
   buttonsContainer.classList.add('btn-container');

   // edit button 
   const editBtn = document.createElement('button');
   editBtn.classList.add('edit');
   editBtn.innerText = 'Edit';

   editBtn.addEventListener('click', () => {
      editHandler(recipe);
   });

   // delete btn
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('delete');
   deleteBtn.innerText = 'Delete';

   deleteBtn.addEventListener('click', () => {
    deleteHandler(recipe._id);
   })

   buttonsContainer.append(editBtn, deleteBtn);

   container.append(image, textContainer, buttonsContainer)
   return container;

}

export default createRecipe;