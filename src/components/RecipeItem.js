import React, { useContext } from 'react';
import { RecipeContext } from '../Context/RecipeContext';

const RecipeItem = ({ recipe }) => {
    const { deleteRecipe } = useContext(RecipeContext);

    return (
        <li>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => deleteRecipe(recipe)}>Eliminar</button>
        </li>
    );
};

export default RecipeItem;
