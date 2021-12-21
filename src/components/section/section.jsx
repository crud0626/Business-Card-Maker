import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMakerSection from '../cardmakersection/cardmakersection';
import CardPreviewSection from '../cardpreviewsection/cardpreviewsection';

import styles from './section.module.css';

const Section = (props) => {
    const navigate = useNavigate();

    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Name",
            company: "Company",
            color: "#385461",
            title: "Title",
            email: "E-mail",
            message: "Message",
        }
    ]);

    const onKeyUp = (id, name, value) => {
        // 아 인덱스로 쓰는거 진짜 마음에 안드는데 방법이 생각이 안난다.
        const index = id - 1;
        const arr = [...cards];
        arr[index][name] = value;
        setCards(arr);
    }

    const addCard = () => {
        const arr = [...cards];
        arr.push({
            id: arr.length + 1,
            name: "Name",
            company: "Company",
            color: "#385461",
            title: "Title",
            email: "E-mail",
            message: "Message",
        });
        console.log(arr);
        console.log(arr.length);
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
                    <CardMakerSection 
                        cards={cards}
                        onKeyUp={onKeyUp}
                        addCard={addCard}
                        deleteCard={deleteCard}
                    />
                    <CardPreviewSection
                        cards={cards}
                    />
                </div>
                <div className={styles.section_bottom}>
                    <span>Welcome to Business Card Maker!</span>
                </div>
            </section>
    );

};

export default Section;