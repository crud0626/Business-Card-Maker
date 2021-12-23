import React from 'react';
import styles from './cardpreview.module.css';

const CardPreview = ({card}) => {
    let bg = {};
    if (card.color === "white" || card.color ===  "#e8e7e6") {
        bg = {
            "backgroundColor": card.color,
            "color": "black"
        };
    } else {
        bg = {
            "backgroundColor": card.color,
            "color": "white"
        };
    }

    const thumbnail = !card.img ?"./images/default_logo.png" : card.img;

    return (
        <div style={bg} className={styles.card_container}>
            <div className={styles.thumbnail}>
                <img src={thumbnail} alt="card_thumbnial" />
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