import React from 'react';
import styles from './cardmaker.module.css';

const CardMaker = (props) => {
    const onInputEvent = (e) => {
        props.onKeyUp(props.card.id, e.target.name, e.target.value);
    }
    return (
        <div key={props.card.id} className={styles.cardmaker_container}>
        <p>Card Maker</p>
        {/* map 함수 적용. */}
            <div className={styles.cardmaker_section}>
                <div className={styles.inputs_container}>
                    <input type="text" name='name' placeholder='Name' onKeyUp={onInputEvent} />
                    <input type="text" name='company' placeholder='Company' onKeyUp={onInputEvent} />
                    <input type="text" placeholder='Dropdown' onKeyUp={onInputEvent} />
                    {/* 수정예정. */}
                </div>
                <div className={styles.inputs_container}>
                    <input type="text" name='title' placeholder='Title' onKeyUp={onInputEvent} />
                    <input type="text" name='email' placeholder='E-mail' onKeyUp={onInputEvent} />
                </div>
                <div className={styles.inputs_container}>
                    <input type="text" name='desc' placeholder='Message' />
                </div>
                <div className={`${styles.inputs_container} ${styles.inputs_btns}`}>
                    <button>Image</button>
                    <button className={styles.del_btn}>Delete</button>
                </div>
            </div>
            {/* map 함수 적용. */}
        </div>
    );
}

export default CardMaker;