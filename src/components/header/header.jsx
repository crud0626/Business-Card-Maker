import React, { memo, useEffect } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => {
        return (
            <header className={styles.header}>
                <img className={styles.header_logo} src="./images/logo.png" alt="main logo" />
                <h1>Business Card Maker</h1>
                <button className={styles.logout_btn} onClick={onLogout}>Logout</button>
            </header>
        )
    }
)

export default Header;