import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { Button } from 'primereact/button';

const Home = ({ setDialogAddRecipe }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Bienvenido a nuestra aplicación de recetas</h1>
      <p>
        {isAuthenticated
          ? "¡Hola, usuario! Puedes gestionar tus recetas aquí."
          : "Por favor, inicia sesión o regístrate para acceder a todas las funciones."}
      </p>
      {isAuthenticated && (
        <Button
          label="Agregar Receta"
          icon="pi pi-plus"
          onClick={() => setDialogAddRecipe(true)}
        />
      )}
    </div>
  );
};

export default Home;
