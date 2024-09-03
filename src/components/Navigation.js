import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';   

import { useAuth } from '../Context/AuthContext';

const Navigation = () => {
    const [isAuthenticated, cerrarSesion] = useAuth();

    const itemAuthenticated = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Recetas',
            icon: 'pi pi-apple',
            url: '/RecipeList'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-address-book',
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => cerrarSesion()
        }
    ];

    const itemUnauthorized = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Ingresar',
            icon: 'pi pi-user',
            url: '/Login'
        },
        {
            label: 'Registrarme',
            icon: 'pi pi-user-plus',
            url: '/Register'
        }
    ];

    const items = isAuthenticated ? itemAuthenticated : itemUnauthorized;

    return <Menubar model={items} />;
};

export default Navigation;

