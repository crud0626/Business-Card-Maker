import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';


const Home = (props) => {
    return(
        <div className={styles.login_container}>
            <div className={styles.login_top}>
                <img src="./images/logo.png" alt="main logo" />
                <h1>Business Card Maker</h1>
            </div>
            <div className={styles.login_center}>
                <p>Login</p>
                <div className={styles.social_btns}>
                    {/* 임시 */}
                    {/* <Link to={"/section"}><div className="g-signin2" data-onsuccess="onSignIn"></div></Link>*/}

                    {/* <Link to={"/section"}>Github</Link> */}
                    <button onClick="signOut()">Log Out</button>
                    
                </div>
            </div>
            <div className={styles.login_bottom}>
                <span>Welcome to Business Card Maker!</span>
            </div>
        </div>
    );
}

export default Home;