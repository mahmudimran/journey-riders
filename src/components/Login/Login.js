import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from)

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    }


    return (
        <div>

            <Container>

                <Row>
                    <Col>
                        <div className="mt-5">
                            <button onClick={handleGoogleSignIn} className="btn-google">Google Sign In </button>
                        </div>
                    </Col>
                    <Col>
                    
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;