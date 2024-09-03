import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext'; 
import RecipeContextProvider from './Context/RecipeContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import PrivateRoute from './components/PrivateRoute';
import About from './components/About';

function App() {
    return (
        <AuthProvider>
            <RecipeContextProvider>
                <Router>
                    <div className="App">
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/about" element={<About />} />

                            {/* Rutas protegidas */}
                            <Route element={<PrivateRoute />}>
                                <Route path="/recipes" element={<RecipeList />} />
                                <Route path="/recipes/new" element={<RecipeForm />} />
                            </Route>
                        </Routes>
                    </div>
                </Router>
            </RecipeContextProvider>
        </AuthProvider>
    );
}

export default App;
