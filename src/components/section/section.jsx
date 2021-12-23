import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMakerSection from '../cardmakersection/cardmakersection';
import CardPreviewSection from '../cardpreviewsection/cardpreviewsection';

import styles from './section.module.css';
import Database from '../../service/database';


const Section = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const DB = new Database();

    const [cards, setCards] = useState([{
        id: 1,
        name: "",
        company: "",
        color: "#385461",
        title: "",
        email: "",
        message: "",
    }]);

    // index말고 다른걸로 수정하기.
    const onKeyUp = (id, name, value) => {
        const index = id - 1;
        const arr = [...cards];
        arr[index][name] = value;
        setCards(arr);
        DB.writeUserData(state.id, arr);
    }

    const addCard = () => {
        let arr = [...cards];
        arr.push(
            {
                id: cards[cards.length - 1].id + 1,
                name: "",
                company: "",
                color: "#385461",
                title: "",
                email: "",
                message: "",
            }
        )
        setCards(arr);
        DB.writeUserData(state.id, arr);
    }

    const deleteCard = (id) => {
        const index = id - 1;
        let arr = [...cards];
        arr.splice(index, 1);
        setCards(arr);
        DB.writeUserData(state.id, arr);
    }

    const onLogout = () => {
        props.authService
            .logout()
            .catch((err) => console.log(`로그아웃 도중 에러가 발생했습니다 : ${err}`))
            .then(navigate('/'));
    }

    const getCardData = () => {
        DB.readUserData(state.id)
        .then(res => setCards(res.cards));
    }

    useEffect(() => {
        getCardData();
    }, [])

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