import React from "react";
import "./food-view.scss";
import { Button, Modal } from 'antd';

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
