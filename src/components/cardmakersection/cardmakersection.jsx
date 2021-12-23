import React from 'react';
import CardMaker from '../cardmaker/cardmaker';
import styles from './cardmakersection.module.css';

const CardMakerSection = (props) => {
    return (
        <div className={styles.cardmaker_container}>
        <p>Card Maker</p>
            <div className={styles.cardmaker_section}>
            {props.cards.map((card) => (
                <CardMaker 
                    key={card.id}
                    card={card}
                    onKeyUp={props.onKeyUp}
                    deleteCard={props.deleteCard}
                    changeImg={props.changeImg}
                />
            ))}
            </div>
            <div className={styles.addBtn_container}>
                <button className={styles.addBtn} onClick={props.addCard}>
                    <img src="./images/plus.png" alt="plusbutton" />
                </button>
            </div>
        </div>
    );
}

export default CardMakerSection;