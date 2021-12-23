import React from 'react';
import CardPreview from '../cardpreview/cardpreview';
import styles from './cardpreviewsection.module.css';

const CardPreviewSection = ({cards}) => {
    return (
            <div className={styles.cardpreview_container}>
                <p>Card Preview</p>
                {cards.map((card) => (
                    <CardPreview 
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
    );
}

export default CardPreviewSection;