import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const usuarioSesion = sessionStorage.getItem("usuarioSesion");
        if (usuarioSesion) {
            setUser(JSON.parse(usuarioSesion));
            setIsAuthenticated(true);
        }
    }, []);

    const registrar = (usuario, contrasena) => { // Cambié "contraseña" a "contrasena"
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioExiste = usuarios.find(u => u.usuario === usuario);

        if (usuarioExiste) {
            throw new Error("El usuario ya existe");
        }

        const nuevoUsuario = { usuario, contrasena };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    };

    const iniciarSesion = (usuario, contrasena) => { // Cambié "contraseña" a "contrasena"
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

        if (!usuarioEncontrado) {
            throw new Error("Credenciales invalidas");
        }

        sessionStorage.setItem("usuarioSesion", JSON.stringify(usuarioEncontrado));
        setUser(usuarioEncontrado);
        setIsAuthenticated(true);
    };

    const cerrarSesion = () => {
        sessionStorage.removeItem("usuarioSesion");
        setUser(null);
        setIsAuthenticated(false);
    };

    return [isAuthenticated, iniciarSesion, registrar, cerrarSesion, user];
};

export const AuthProvider = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};
