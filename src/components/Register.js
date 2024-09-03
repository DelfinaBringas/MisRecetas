import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        // Validar si las contraseñas coinciden
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Almacenar las credenciales en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirigir a la página de inicio de sesión después del registro exitoso
        navigate('/login');
    };

    return (
        <div>
            <h2>Registrar</h2>
            <form onSubmit={handleRegister}>
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
                <div>
                    <label>Confirmar Contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registrarse</button>
                {error && <p>{error}</p>}
            </form>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
    );
};

export default Register;