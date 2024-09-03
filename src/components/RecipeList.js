import React, { useContext } from 'react';
import { RecipeContext } from '../Context/RecipeContext';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
    const { recipes } = useContext(RecipeContext);

    return (
        <ul>
            {recipes.map(recipe => (
                <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
        </ul>
    );
};

export default RecipeList;
