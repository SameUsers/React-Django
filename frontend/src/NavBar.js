
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Импортируйте контекст аутентификации

const NavBar = () => {
    const { logout, authTokens } = useContext(AuthContext); // Получите функцию logout и токены

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Главная</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="product">Все объявления</a>
                        <a className="nav-item nav-link" href="product">Features</a>
                        <a className="nav-item nav-link" href="product">Pricing</a>
                        <a className="nav-item nav-link disabled" href="product">Disabled</a>
                        {authTokens ? (
                            <button className="btn btn-danger ml-auto" onClick={logout}>Выйти</button> // Кнопка выхода
                        ) : (
                            <a className="nav-item nav-link" href="/login">Войти</a> // Ссылка на страницу входа
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;