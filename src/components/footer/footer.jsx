import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
    return (
        <footer className={styles.footer}>
        <span>Welcome to Business Card Maker!</span>
    </footer>
    )}
)

export default Footer;