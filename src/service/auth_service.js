import { firebaseAuth, githubProvider, googleProvider } from './firebase'

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        return firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged((res) => {
            onUserChanged(res)
        })
    }

    getProvider(providerName) {
        switch(providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw Error (`Not defined provider : ${providerName}`)
        }
    }
}

export default AuthService;