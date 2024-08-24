import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Создаем контекст
export const AuthContext = createContext();

// Провайдер для управления аутентификацией
export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? { access: token, refresh: localStorage.getItem('refreshToken') } : null;
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Проверка и обновление токенов при загрузке
        if (authTokens) {
            axios.interceptors.request.use(config => {
                config.headers.Authorization = `Bearer ${authTokens.access}`;
                return config;
            });

            axios.interceptors.response.use(
                response => response,
                async (error) => {
                    const { response } = error;
                    if (response.status === 401 && response.data.code === 'token_not_valid') {
                        try {
                            const { data } = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                                refresh: authTokens.refresh,
                            });
                            setAuthTokens({
                                access: data.access,
                                refresh: authTokens.refresh,
                            });
                            localStorage.setItem('token', data.access);
                        } catch (err) {
                            setAuthTokens(null);
                            localStorage.removeItem('token');
                            localStorage.removeItem('refreshToken');
                            window.location.href = '/login';
                        }
                    }
                    return Promise.reject(error);
                }
            );
        }
        setLoading(false);
    }, [authTokens]);

    const login = async (username, password) => {
        const { data } = await axios.post('http://127.0.0.1:8000/api/token/', { username, password });
        setAuthTokens({
            access: data.access,
            refresh: data.refresh,
        });
        localStorage.setItem('token', data.access);
        localStorage.setItem('refreshToken', data.refresh);
    };

    const logout = () => {
        setAuthTokens(null);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ authTokens, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};