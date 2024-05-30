// Imports
import React from "react";
import { useState, useEffect } from "react";

// Import Components
import { FoodCard } from "../food-card/food-card";
import { FoodView } from "../food-view/food-view";

const MainView = () => {
    const [foodlist, setFoodlist] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);

    // Fetch API
    useEffect(() => {
        fetch("https://openlibrary.org/search.json?q=star+wars")
            .then((response) => response.json())
            .then((data) => {
                const booksFromApi = data.docs.map((doc) => {
                    return {
                        id: doc.key,
                        title: doc.title,
                        image:
                            `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
                        author: doc.author_name?.[0]
                    };
                });

                setFoodlist(booksFromApi);
            });
    }, []);

    // Function to show food on click
    if (selectedFood) {
        return (
            <FoodView food={selectedFood} onBackClick={() => setSelectedFood(null)}/>
        );
    }

    if (foodlist.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <>
            {foodlist.map((food) => (
                <FoodCard
                    key={food.id}
                    food={food}
                    onFoodClick={(newSelectedFood) => {
                        setSelectedFood(newSelectedFood);
                    }}
                />
            ))}
        </>
    );
};

export default MainView;