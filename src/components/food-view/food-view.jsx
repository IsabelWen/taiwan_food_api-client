import React from "react";

export const FoodView = ({ food, onBackClick }) => {

    return (
        <div>
            <img src={food.image} alt={food.english} style={{maxHeight: '500px'}}/>
            <div>
                <span>English: </span>
                <span>{food.english}</span>
            </div>
            <div>
                <span>Chinese: </span>
                <span>{food.chinese}</span>
            </div>
            <div>
                <span>Zhuyin: </span>
                <span>{food.zhuyin}</span>
            </div>
            <div>
                <span>Pinyin: </span>
                <span>{food.pinyin}</span>
            </div>
            <div>
                <span>Details: </span>
                <span>{food.details}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};
