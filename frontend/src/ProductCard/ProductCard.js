import React from 'react';

// Функциональный компонент вместо класса
const ProductCard = ({ apivalue }) => {
    const url = "http://localhost:3000/ProductIndividual?";

    return (
        <div>
            {apivalue.map((el) => (
                <div key={el.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{el.price}$</h6>
                        <p className="card-text">{el.short_description}</p>
                        <a href={`${url}id=${el.id}`} className="card-link">Подробнее</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;