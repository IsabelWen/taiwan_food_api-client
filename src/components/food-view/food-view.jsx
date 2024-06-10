import React from "react";
import PropTypes from "prop-types";
import "./food-view.scss";
import { Descriptions, Modal } from 'antd';

export const FoodView = ({ food, onBackClick }) => {

    return (
        <Modal 
        title={food.chinese} 
        open={true} 
        footer={null}
        onCancel={onBackClick}
        maskClosable={true}
        className="food-modal"
        >
            <img src={food.image} alt={food.english} style={{maxHeight: '500px'}}/>
            <div>
                <span><b>English: </b></span>
                <span>{food.english}</span>
            </div>
            <div>
                <span><b>Zhuyin: </b></span>
                <span>{food.zhuyin}</span>
            </div>
            <div>
                <span><b>Pinyin: </b></span>
                <span>{food.pinyin}</span>
            </div>
            <div>
                <span><b>Details: </b></span>
                <span>{food.details}</span>
            </div>
        </Modal>
    );
};

// Prop type validation
FoodView.propTypes = {
    food: PropTypes.shape({
        chinese: PropTypes.string.isRequired,
        english: PropTypes.string.isRequired,
        zhuyin: PropTypes.string.isRequired,
        pinyin: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
    }).isRequired,
    onFoodClick: PropTypes.func.isRequired
};