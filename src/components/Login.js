import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Recuperar credenciales almacenadas en localStorage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Verificar las credenciales
        if (username === storedUsername && password === storedPassword) {
            // Almacenar el token o cualquier dato relevante
            localStorage.setItem('token', 'some-auth-token');
            console.log('Login exitoso');
            navigate('/recetas'); // Redirigir a la página de recetas después del inicio de sesión exitoso
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div>
            <h2>Inicio de Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ingresar</button>
                {error && <p>{error}</p>}
            </form>
            <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
    );
};

export default Login;