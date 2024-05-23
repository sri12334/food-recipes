import Recipe from '../models/Recipe.js';

const recipeControllers = {
    getAllRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    createRecipe: async (req, res) => {
        try {
            if (
                !req.body.title ||
                !req.body.ingredients ||
                !req.body.instructions ||
                !req.body.image
            ) {
                return res
                    .status(400)
                    .json({ message: 'All fields are required' });
            } else {
                const recipe = new Recipe({
                    title: req.body.title,
                    ingredients: req.body.ingredients,
                    instructions: req.body.instructions,
                    image: req.body.image
                });
                await recipe.save();
                res.status(201).json(recipe);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getRecipeById: async (req, res) => {
        try {
            if (!req.params.id) {
                return res
                    .status(400)
                    .json({ message: 'Recipe ID is required' });
            } else {
                const recipe = await Recipe.findById(req.params.id);
                if (!recipe) {
                    return res
                        .status(404)
                        .json({ message: 'Recipe not found' });
                }
                res.status(200).json(recipe);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            recipe.title = req.body.title;
            recipe.ingredients = req.body.ingredients;
            recipe.instructions = req.body.instructions;
            recipe.image = req.body.image;
            await recipe.save();
            res.status(200).json(recipe);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    deleteRecipe: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            } else {
                await Recipe.findByIdAndDelete(req.params.id);
            }

            res.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

export default recipeControllers;
