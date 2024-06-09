import React from "react";
import PropTypes from "prop-types";
import "./food-card.scss";
import { Card } from 'antd';

export const FoodCard = ({ food, onFoodClick }) => {
    return (
        <Card onClick={() => onFoodClick(food)} title={food.chinese} style={{width: 400}} className="food-card"
            cover={<img src={food.image} alt={food.english} 
            style={{maxHeight: '300px', objectFit: 'cover'}}/>}
        >
        </Card>
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