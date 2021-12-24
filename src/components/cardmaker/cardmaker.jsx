import React from 'react';
import styles from './cardmaker.module.css';


const CardMaker = (props) => {
    const onInputEvent = (e) => {
        props.onKeyUp(props.card.id, e.target.name, e.target.value);
    }
    const deleteKeyUp = () => {
        props.deleteCard(props.card.id);
    }

    const setImage = () => {
        const file = document.querySelector(`#imgForm${props.card.id}`).files[0];
        props.changeImg(file, props.card.id);
    }
    
    return (
        <div className={styles.card_container}>
            <div className={styles.inputs_container}>
                <input type="text" name='name' placeholder='Name' value={props.card.name} onChange={onInputEvent} />
                <input type="text" name='company' placeholder='Company' value={props.card.company} onChange={onInputEvent} />
                <select name="color" value={props.card.color} onChange={onInputEvent}>
                    <option value="#385461">Green</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="#e8e7e6">Lightgrey</option>
                    <option value="#626262">Grey</option>
                    <option value="pink">Pink</option>
                </select>
            </div>
            <div className={styles.inputs_container}>
                <input type="text" name='title' placeholder='Title' value={props.card.title} onChange={onInputEvent} />
                <input type="text" name='email' placeholder='E-mail' value={props.card.email} onChange={onInputEvent} />
            </div>
            <div className={styles.inputs_container}>
                <input type="text" name='message' placeholder='Message' value={props.card.message} onChange={onInputEvent} />
            </div>
            <div className={`${styles.inputs_container} ${styles.inputs_btns}`}>
                {/* label내부 가변적으로 Upload Photo | Change Photo */}
                <label className={styles.file_btn} for={`imgForm${props.card.id}`}>
                    {props.card.img? "Change Photo" : "Upload Photo"}
                </label>
                <input type="file" name="files[]" onChange={setImage} id={`imgForm${props.card.id}`} accept="image/*" />
                <button className={styles.del_btn} onClick={deleteKeyUp}>Delete</button>
            </div>
        </div>
    );
};

export default CardMaker;