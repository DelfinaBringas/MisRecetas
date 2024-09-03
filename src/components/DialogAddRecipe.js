import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

const DialogAddRecipe = ({ dialogAddRecipe, setDialogAddRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const toast = useRef(null);

  const handleSave = () => {
    if (recipeName && recipeDescription) {
      // Lógica para guardar la receta (puede ser una llamada a una API o actualizar el estado global)
      console.log('Receta guardada:', { recipeName, recipeDescription });

      // Mostrar un mensaje de éxito
      toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Receta guardada con éxito', life: 3000 });

      // Limpiar campos y cerrar el diálogo
      setRecipeName('');
      setRecipeDescription('');
      setDialogAddRecipe(false);
    } else {
      // Mostrar un mensaje de error
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Por favor, complete todos los campos', life: 3000 });
    }
  };

  const handleHide = () => {
    setDialogAddRecipe(false);
  };

  return (
    <div>
      <Toast ref={toast} />
      <Dialog
        header="Agregar Receta"
        visible={dialogAddRecipe}
        style={{ width: '50vw' }}
        onHide={handleHide}
        footer={
          <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={handleHide} className="p-button-text" />
            <Button label="Guardar" icon="pi pi-check" onClick={handleSave} autoFocus />
          </div>
        }
      >
        <div className="p-field">
          <label htmlFor="recipeName">Nombre de la Receta</label>
          <InputText
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            placeholder="Ingrese el nombre de la receta"
          />
        </div>
        <div className="p-field">
          <label htmlFor="recipeDescription">Descripción de la Receta</label>
          <textarea
            id="recipeDescription"
            value={recipeDescription}
            onChange={(e) => setRecipeDescription(e.target.value)}
            placeholder="Ingrese la descripción de la receta"
            rows={5}
            cols={30}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default DialogAddRecipe;
