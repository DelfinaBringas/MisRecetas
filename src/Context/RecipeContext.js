import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(storedRecipes);
    }, []);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    const deleteRecipe = (recipeToDelete) => {
        setRecipes(recipes.filter(recipe => recipe.id !== recipeToDelete.id));
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeProvider;
