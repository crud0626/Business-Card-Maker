import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMakerSection from '../cardmakersection/cardmakersection';
import CardPreviewSection from '../cardpreviewsection/cardpreviewsection';

import styles from './section.module.css';
import Database from '../../service/database';
import Cloudinary from '../../service/cloudinary';


const Section = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const DB = new Database();
    const cloudinary = new Cloudinary();

    const changeImg = (file, id) => {
        cloudinary.uploadImg(file, id)
        .then(url => {
            const target = cards.filter(card => card.id === id);
            const index = cards.indexOf(target[0]);
            const arr = [...cards];
            arr[index].img = url;

            setCards(arr);
            DB.writeUserData(state.id, arr);
        });
    }

    const [cards, setCards] = useState([{
        id: 1,
        name: "",
        company: "",
        color: "#385461",
        title: "",
        email: "",
        img: "",
        message: "",
    }]);

    const onKeyUp = (id, name, value) => {
        const target = cards.filter(card => card.id === id);
        const index = cards.indexOf(target[0]);
        const arr = [...cards];
        
        arr[index][name] = value;
        setCards(arr);
        DB.writeUserData(state.id, arr);
    }

    const addCard = () => {
        let arr = [...cards];
        arr.push(
            {
                // 현재 있는 카드 전체 다 삭제하고 다시 할 때 받아올 id 가 없음. 조건걸어줘야함.
                id: cards[cards.length - 1].id + 1,
                name: "",
                company: "",
                color: "#385461",
                title: "",
                email: "",
                img: "",
                message: "",
            }
        )
        setCards(arr);
        DB.writeUserData(state.id, arr);
    }

    const deleteCard = (id) => {
        const target = cards.filter(card => card.id === id);
        const index = cards.indexOf(target[0]);
        const arr = [...cards];
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
        console.log(state.id);
        DB.readUserData(state.id)
        .then(res => {
            if(res === null) {
                setCards([{
                    id: 1,
                    name: "",
                    company: "",
                    color: "#385461",
                    title: "",
                    email: "",
                    img: "",
                    message: "",
                }]);
            } else {
                setCards(res.cards)
            }
        });
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
                        changeImg={changeImg}
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