import React from "react";
import PropTypes from "prop-types";
import "./food-view.scss";
import Modal from 'react-bootstrap/Modal';

export const FoodView = ({ food, onBackClick }) => {

    return (
        <Modal 
        onHide={onBackClick}
        show={true}
        className="food-modal"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{food.chinese}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="left">
                    <img src={food.image} alt={food.english} style={{maxHeight: '500px'}}/>
                </div>
                <div className="right">
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
                </div>
            </Modal.Body>
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