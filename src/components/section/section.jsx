import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMaker from '../cardmaker/cardmaker';
import CardPreview from '../cardpreview/cardpreview';
import styles from './section.module.css';

const Section = (props) => {
    const navigate = useNavigate();

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

    const onLogout = () => {
        props.authService
            .logout()
            .then(props.successLogOut())
            .catch((err) => console.log(`로그아웃 도중 에러가 발생했습니다 : ${err}`))
            .then(navigate('/'));
    }


    return (
            <section>
                <div className={styles.section_top}>
                    <img src="./images/logo.png" alt="main logo" />
                    <h1 onClick={onKeyUp}>Business Card Maker</h1>
                    <button className={styles.logout_btn} onClick={onLogout}>Logout</button>
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