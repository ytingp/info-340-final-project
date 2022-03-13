import Header from "./Header";
import { StyledFirebaseAtuh, StyledFirebaseAuth } from 'react-firebaseui'
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
import  Nav  from "./Nav"
const FIREBASEUI_CONFIG = {
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }
    ],

    signInFlow: 'popup',
    CredentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
}


function SignIn() {
    const auth = getAuth();
    return(
        <div>
            <Header />
            <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth}/>
        </div>
        
    )
}

export default SignIn;