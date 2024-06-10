import React from "react";
import PropTypes from "prop-types";
import "./food-card.scss";
import { Card } from 'antd';

export const FoodCard = ({ food, onFoodClick }) => {
    return (
        <Card onClick={() => onFoodClick(food)} title={food.chinese} style={{width: 300}} className="food-card"
            cover={<img src={food.image} alt={food.english} 
            style={{maxHeight: '200px', objectFit: 'cover'}}/>}
        >
        </Card>
    );
};

// Prop type validation
FoodCard.propTypes = {
    food: PropTypes.shape({
        chinese: PropTypes.string.isRequired,
    }).isRequired,
    onFoodClick: PropTypes.func.isRequired
};