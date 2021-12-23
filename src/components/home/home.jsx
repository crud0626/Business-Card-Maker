import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';


const Home = (props) => {
    const navigate = useNavigate();

    const goToMaker = userId => {
        navigate('/section', {
            state: {
                id: userId
            }
        })
    }

    const onLogin = (e) => {
        props.authService
            .login(e.target.innerText)
            .then(res => goToMaker(res.user.uid))
            .catch((err) => console.log(`로그인 도중 에러가 발생했습니다 : ${err}`))
    }

    useEffect(() => {
        props.authService
        .onAuthChange((user) => {
            user && goToMaker(user.uid);
        })
    });

    return(
        <div className={styles.home_container}>
            <div className={styles.login_container}>
                <header className={styles.login_top}>
                    <img src="./images/logo.png" alt="main logo" />
                    <h1>Business Card Maker</h1>
                </header>
                <div className={styles.login_center}>
                    <p>Login</p>
                    <ul className={styles.social_btns}>
                        <li>
                            <button onClick={onLogin}>Google</button>
                        </li>
                        <li>
                            <button onClick={onLogin}>Github</button>
                        </li>
                    </ul>
                </div>
                <div className={styles.login_bottom}>
                    <span>Welcome to Business Card Maker!</span>
                </div>
            </div>
        </div>
    );
}

export default Home;