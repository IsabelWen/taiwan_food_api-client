import React from "react";

export const FoodView = ({ food, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={food.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{food.title}</span>
            </div>
            <div>
                <span>Author: </span>
                <span>{food.author}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};
