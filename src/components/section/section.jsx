import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMakerSection from '../cardmakersection/cardmakersection';
import CardPreviewSection from '../cardpreviewsection/cardpreviewsection';

import styles from './section.module.css';
import Database from '../../service/database';
import Cloudinary from '../../service/cloudinary';
import Header from '../header/header';
import Footer from '../footer/footer';

const Section = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [userId, setUserId] = useState();
    const [cards, setCards] = useState([]);

    const DB = new Database();
    const cloudinary = new Cloudinary();

    const cardTemplate = {
        id: 1,
        name: "",
        company: "",
        color: "#385461",
        title: "",
        email: "",
        img: "",
        message: "",
    };

    const changeImg = (file, id) => {
        return cloudinary.uploadImg(file)
        .then(url => {
            const target = cards.filter(card => card.id === id);
            const index = cards.indexOf(target[0]);
            const arr = [...cards];
            arr[index].img = url;

            setCards(arr);
            DB.writeUserData(state.id, arr);
        })
    }

    const onKeyUp = (id, name, value) => {
        const target = cards.filter(card => card.id === id);
        const index = cards.indexOf(target[0]);
        const arr = [...cards];
        
        arr[index][name] = value;
        setCards(arr);
        DB.writeUserData(userId, arr);
    }

    const addCard = () => {
        let arr;
        if (cards.length === 0) {
            arr = [{...cardTemplate}];
        } else {
            arr = [...cards];
            arr.push({...cardTemplate, id: cards[cards.length - 1].id + 1});
        }
        setCards(arr);
        DB.writeUserData(userId, arr);
    }

    const deleteCard = (id) => {
        const target = cards.filter(card => card.id === id);
        const index = cards.indexOf(target[0]);
        const arr = [...cards];
        arr.splice(index, 1);
        setCards(arr);
        DB.writeUserData(userId, arr);
    }

    const onLogout = useCallback(() => {
        props.authService
            .logout()
            .catch((err) => console.log(`로그아웃 도중 에러가 발생했습니다 : ${err}`))
            .then(navigate('/'));
    },[props.authService])

    const getCardData = useCallback(() => {
        DB.readUserData(state.id)
        .then(res => {
            if(res === null) {
                setCards([{...cardTemplate}]);
            } else {
                setCards(res.cards)
            }
        });
    }, [state.id, DB, setCards, cardTemplate])

    useEffect(() => {
        if (state.id) {
            setUserId(state.id);
            getCardData(state.id);
        } else {
            navigate('/');
        }
    }, [state.id])
    // 에러 아직 못없앰.

    return (
            <section>
                <Header 
                    onLogout={onLogout}
                />
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
                <Footer />
            </section>
    );

};

export default Section;