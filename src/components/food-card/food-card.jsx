import React from "react";
import PropTypes from "prop-types";
import "./food-card.scss";
import Card from 'react-bootstrap/Card';

export const FoodCard = ({ food, onFoodClick }) => {
    return (
        <Card onClick={() => onFoodClick(food)} style={{width: 350}} className="food-card">
            <Card.Body>
                <Card.Title>{food.chinese}</Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" src={food.image} alt={food.english}/>
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