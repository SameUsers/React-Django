import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Состояние для хранения имени пользователя и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate(); // Хук для навигации

    // Функция для обработки входных данных
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    // Функция для отправки данных на сервер
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/token/", {
                username: username,
                password: password
            });

            // Сохраняем токены в localStorage
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            setToken(localStorage.getItem('token'))

            // Перенаправление на главную страницу
            navigate('/');
            window.location.reload()

        } catch (error) {
            console.error("Error during login: ", error);

        }
    };
    if(token){return navigate('/');}
    return (
    <>
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <div id="emailHelp" className="form-text">
                    Мы никогда никому не передадим вашу электронную почту.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Отправить
            </button>
        </form>
        <div>
        <a href ="registration">Зарегистрироваться</a>
        </div>
        </>
    );
};

export default Login;