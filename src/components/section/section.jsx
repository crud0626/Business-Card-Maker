import React, { useState } from 'react';
import CardMaker from '../cardmaker/cardmaker';
import CardPreview from '../cardpreview/cardpreview';
import styles from './section.module.css';

const Section = (props) => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "React",
            company: "React corp.",
            color: "#385461",
            title: "FrontEnd Developer",
            email: "react@gmail.com",
            message: "I want SPA!",
        }
    ]);

    const onKeyUp = (id, name, value) => {
        // 아 인덱스로 쓰는거 진짜 마음에 안드는데 방법이 생각이 안난다.
        const index = id - 1;
        const arr = [...cards];
        arr[index][name] = value;
        setCards(arr);
    }

    const deleteCard = (id) => {
        const index = id - 1;
        const arr = [...cards];
        arr.splice(index, 1);
        setCards(arr);
    }

    return (
            <section>
                <div className={styles.section_top}>
                    <img src="./images/logo.png" alt="main logo" />
                    <h1 onClick={onKeyUp}>Business Card Maker</h1>
                </div>
                <div className={styles.section}>
                    {cards.map((card) => (
                        <CardMaker 
                            card={card}
                            onKeyUp={onKeyUp}
                            deleteCard={deleteCard}
                        />
                    ))}
                    {cards.map((card) => (
                        <CardPreview
                            card={card}
                        />
                    ))}
                </div>
                <div className={styles.section_bottom}>
                    <span>Welcome to Business Card Maker!</span>
                </div>
            </section>
    );

};

export default Section;