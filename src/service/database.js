import firebase from "firebase";
import firebaseApp from './firebase';

class Database {
    database = firebase.database();

    writeUserData(userID, cards) {
        firebaseApp.database().ref('users/' + userID).set({
            cards : cards
        });
    }

    readUserData(userID) {
        return firebase.database().ref('/users/' + userID).once('value')
        // return firebase.database().ref('/users/333').once('value')
        .then((snapshot) => {
            let test = snapshot.val();
            return test;
        })
        // 처음 실행하자마자 에러가 한번 잡히는데 이유가 뭘지 찾아보자.
        .catch(console.log(`read Error: ${Error}`));
    }

}

export default Database;