import { firebaseDatabase } from './firebase'

// 데이터 전체를 덮어쓰는거 같은데 이 부분개선하기.
// 파이어베이스에서 직접 데이터 조작할 때도 불러오도록 해야하나?
class Database {

    writeUserData(userID, cards) {
        firebaseDatabase.ref(`users/${userID}`).set({
        // firebaseApp.database().ref('users/' + userID).set({
            cards : cards
        });
    }

    readUserData(userID) {
        return firebaseDatabase.ref(`users/${userID}`).once('value')
        // return firebase.database().ref('/users/' + userID).once('value')
        .then((snapshot) => {
            let test = snapshot.val();
            return test;
        })
        // 처음 실행하자마자 에러가 한번 잡히는데 이유가 뭘지 찾아보자.
        .catch(console.log(`read Error: ${Error}`));
    }

    // remove함수도 추가하기.

}

export default Database;