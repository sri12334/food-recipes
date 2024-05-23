import express from 'express';

const router = express.Router();

import recipeControllers from '../controllers/recipe.js';

// routes
router.get('/', recipeControllers.getAllRecipes);
router.post('/', recipeControllers.createRecipe);
router.get('/:id', recipeControllers.getRecipeById);
router.put('/:id', recipeControllers.updateRecipe);
router.delete('/:id', recipeControllers.deleteRecipe);

export default router;
