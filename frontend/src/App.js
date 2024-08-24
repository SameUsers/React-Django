import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainString from "./MainString/MainString";
import ProductCardMain from "./ProductCard/ProductCardMain";
import ProductIndividual from "./ProductIndividual/ProductIndividual";
import Login2 from "./Login2/Login2";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Layout from './Layout'
import { AuthProvider, AuthContext } from './AuthContext';
import axios from "axios";

const App = () => {
    const { authTokens } = useContext(AuthContext); // Получите токены из контекста
    const [loading, setLoading] = useState(true); // Состояние загрузки для предотвращения рендеринга до проверки

    useEffect(() => {
        // Проверка токенов при монтировании компонента
        if (authTokens) {
            // Если токены есть, проверяем их валидность
            axios.post('http://127.0.0.1:8000/api/token/verify/', {
                token: authTokens.access,
            }).then(() => {
                setLoading(false);
            }).catch(() => {
                // Если токены невалидны, очищаем их
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [authTokens]);

    if (loading) {
        return <div>Loading...</div>; // Показываем загрузочный индикатор до завершения проверки
    }

    return (
        <BrowserRouter>
            {authTokens ? (
                <>
                    <Layout>
                    <Routes>
                        <Route path="/" element={<MainString />} />
                        <Route path="/product" element={<ProductCardMain />} />
                        <Route path="/productindividual" element={<ProductIndividual />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    </Layout>
                </>
            ) : (
                <Layout>
                <Routes>
                    <Route path="/login" element={<Login2 />} />
                    <Route path="/registration" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
                </Layout>

            )}
        </BrowserRouter>
    );
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);