import React from 'react';
import styles from './cardpreview.module.css';

const CardPreview = ({card}) => {
    let bg = {};
    if (card.color === "white" || card.color ===  "#e8e7e6") {
        bg = {
            "background-color": card.color,
            "color": "black"
        };
    } else {
        bg = {
            "background-color": card.color,
            "color": "white"
        };
    }

    return (
        <div style={bg} className={styles.card_container}>
            <div className={styles.thumbnail}>
                <img src="./images/default_logo.png" alt="default logo" />
            </div>
            <div className={styles.info}>
                <p>{card.name}</p>
                <span>{card.company}</span>
                <div className={styles.line}></div>
                <span>{card.title}</span>
                <span>{card.email}</span>
                <span>{card.message}</span>
            </div>
        </div>
    );
};

export default CardPreview;