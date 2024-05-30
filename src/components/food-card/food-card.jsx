import React from "react";

import PropTypes from "prop-types";

export const FoodCard = ({ food, onFoodClick }) => {
    return (
        <div onClick={() => onFoodClick(food)}>
            <h2>{food.title}</h2>
            <p>{food.author}</p>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string
    }).isRequired,
    onFoodClick: PropTypes.func.isRequired
};