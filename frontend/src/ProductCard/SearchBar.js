import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import axios from "axios";

const SearchBar = () => {
    const [api, setApi] = useState([]);
    const [searchbar, setSearchbar] = useState('');
    const [nextApi, setNextApi] = useState('');
    const [prevApi, setPrevApi] = useState('');
    const [baseurl] = useState("http://127.0.0.1:8000/API/FlatsAPI/?limit=10");


    const token = localStorage.getItem('token');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseurl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setApi(response.data.results);
                setNextApi(response.data.next);
                setPrevApi(response.data.previous || '');
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [baseurl, token]);


    const searching = () => {
        const filteredApi = api.filter(el => el.price.toString() === searchbar);
        setApi(filteredApi);
    };


    const loadNextPage = async () => {
        if (nextApi) {
            try {
                const response = await axios.get(nextApi, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setApi(response.data.results);
                setNextApi(response.data.next);
                setPrevApi(response.data.previous || '');
            } catch (error) {
                console.error("Error fetching next page: ", error);
            }
        }
    };


    const loadPrevPage = async () => {
        if (prevApi) {
            try {
                const response = await axios.get(prevApi, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setApi(response.data.results);
                setNextApi(response.data.next);
                setPrevApi(response.data.previous || '');
            } catch (error) {
                console.error("Error fetching previous page: ", error);
            }
        }
    };

    return (
        <div className="MainAreaProductList">
            <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="Search">Поиск по цене</label>
                <input
                    type="text"
                    className="Search"
                    placeholder="800.00"
                    value={searchbar}
                    onChange={(e) => setSearchbar(e.target.value)}
                />
                <button type="button" onClick={searching}>Подтвердить</button>
                <button type="button" onClick={() => setSearchbar('')}>Сбросить фильтр</button>
            </form>
            <div className="Card">
                <ProductCard apivalue={api} />
                <div className="Pagination">
                    <input
                        type="button"
                        onClick={loadPrevPage}
                        value="Назад"
                        disabled={!prevApi}
                    />
                    <input
                        type="button"
                        onClick={loadNextPage}
                        value="Next"
                        disabled={!nextApi}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;