import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        return firebaseApp.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        // onAuthStateChanged 메소드는 현재 로그인되어있는 사용자의 정보를 반환한다. 없다면 null
        firebase.auth().onAuthStateChanged((res) => {
            onUserChanged(res)
        })
    }
}

export default AuthService;