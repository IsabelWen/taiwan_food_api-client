// Imports
import React from "react";
import { useState, useEffect } from "react";
import "./main-view.scss";

// Import Components
import { FoodCard } from "../food-card/food-card";
import { FoodView } from "../food-view/food-view";

const MainView = () => {
    const [foodlist, setFoodlist] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);

    // Fetch API
    useEffect(() => {
        fetch("https://taiwan-food-api.onrender.com/foodlist")
            .then((response) => response.json())
            .then((foodData) => {
                const foodlistFromApi = foodData.map((food) => {
                    // Convert Buffer to a base64-encoded string
                    const imageBuffer = Buffer.from(food.img);
                    const imageBase64 = imageBuffer.toString("base64");
                    return {
                        id: food.id,
                        chinese: food.chinese,
                        english: food.english,
                        zhuyin: food.zhuyin,
                        pinyin: food.pinyin,
                        details: food.details,
                        image: `data:image/jpg;base64,${imageBase64}`,
                    };
                });
                setFoodlist(foodlistFromApi);
            }).catch(error => {
                console.error('Error: ', error);
            });
    }, []);

    // Conditional rendering for empty food list
    if (foodlist.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div className="main-container">
            <div className="list-container">
            {foodlist.map((food) => (
                <FoodCard
                    key={food.id}
                    food={food}
                    onFoodClick={() => setSelectedFood(food)}
                />
            ))}
            </div>
            {selectedFood ? (
                <FoodView 
                    food={selectedFood} 
                    onBackClick={() => setSelectedFood(null)} 
                />
            ) : null}
        </div>
    );
};

export default MainView;