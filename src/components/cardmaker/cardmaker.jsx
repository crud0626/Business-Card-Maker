import React from 'react';
import styles from './cardmaker.module.css';

const CardMaker = (props) => {
    const onInputEvent = (e) => {
        props.onKeyUp(props.card.id, e.target.name, e.target.value);
    }
    const deleteKeyUp = () => {
        props.deleteCard(props.card.id);
    }
    
    return (
        <div className={styles.card_container}>
            <div key={props.card.id} className={styles.inputs_container}>
                <input type="text" name='name' placeholder='Name' onKeyUp={onInputEvent} />
                <input type="text" name='company' placeholder='Company' onKeyUp={onInputEvent} />
                <select name="color" onChange={onInputEvent}>
                    <option value="#385461">Green</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="#e8e7e6">Lightgrey</option>
                    <option value="#626262">Grey</option>
                    <option value="pink">Pink</option>
                </select>
            </div>
            <div className={styles.inputs_container}>
                <input type="text" name='title' placeholder='Title' onKeyUp={onInputEvent} />
                <input type="text" name='email' placeholder='E-mail' onKeyUp={onInputEvent} />
            </div>
            <div className={styles.inputs_container}>
                <input type="text" name='message' placeholder='Message' onKeyUp={onInputEvent} />
            </div>
            <div className={`${styles.inputs_container} ${styles.inputs_btns}`}>
                <button>Image</button>
                <button className={styles.del_btn} onClick={deleteKeyUp}>Delete</button>
            </div>
        </div>
    );
};

export default CardMaker;