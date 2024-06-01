import React from "react";

import PropTypes from "prop-types";

export const FoodCard = ({ food, onFoodClick }) => {
    return (
        <div onClick={() => onFoodClick(food)}>
            <h2>{food.english}</h2>
            <p>{food.chinese}</p>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.shape({
        english: PropTypes.string.isRequired,
        chinese: PropTypes.string.isRequired,
        zhuyin: PropTypes.string
    }).isRequired,
    onFoodClick: PropTypes.func.isRequired
};