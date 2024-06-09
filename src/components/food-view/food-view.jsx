import React from "react";
import { Button, Modal } from 'antd';

export const FoodView = ({ food, onBackClick }) => {

    return (
        <Modal 
        title={food.chinese} 
        open={true} 
        footer={null}
        onCancel={onBackClick}
        maskClosable={true}
        >
            <img src={food.image} alt={food.english} style={{maxHeight: '500px'}}/>
            <div>
                <span>English: </span>
                <span>{food.english}</span>
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
        </Modal>
    );
};
