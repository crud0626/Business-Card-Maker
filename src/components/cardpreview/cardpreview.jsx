import React from 'react';
import styles from './cardpreview.module.css';

// 컴포넌트 하나 더 쪼개야된다. p태그 들어있음.

const CardPreview = (props) => {
    console.log(props.card);
    return (
            <div className={styles.cardpreview_container}>
                <p>Card Preview</p>
                <div className={styles.card_container}>
                    <div className={styles.thumbnail}>
                        <img src="./images/default_logo.png" alt="default logo" />
                    </div>
                    <div className={styles.info}>
                        <p>{props.card.name}</p>
                        <span>{props.card.company}</span>
                        <div className={styles.line}></div>
                        <span>{props.card.title}</span>
                        <span>{props.card.email}</span>
                        <span>{props.card.message}</span>
                    </div>
                </div>
            </div>
    );
}

export default CardPreview;