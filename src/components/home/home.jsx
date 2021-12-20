import React from 'react';
import styles from './home.module.css';

const Home = (props) => (
        <div className={styles.login_container}>
            <div className={styles.login_top}>
                <img src="./images/logo.png" alt="main logo" />
                <h1>Business Card Maker</h1>
            </div>
            <div className={styles.login_center}>
                <p>Login</p>
                <div className={styles.social_btns}>
                    <button>Google</button>
                    <button>Github</button>
                </div>
            </div>
            <div className={styles.login_bottom}>
                <span>Welcome to Business Card Maker!</span>
            </div>
        </div>
    );

export default Home;