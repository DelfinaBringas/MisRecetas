import React, { useState, useContext } from 'react';
import { RecipeContext } from '../Context/RecipeContext';

const RecipeForm = () => {
    const { addRecipe } = useContext(RecipeContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            addRecipe({ id: Date.now(), name, description });
            setName('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nombre de la receta" 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Descripción de la receta"
            />
            <button type="submit">Agregar Receta</button>
        </form>
    );
};

export default RecipeForm;
