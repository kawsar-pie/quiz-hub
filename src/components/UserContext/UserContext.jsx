import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: "", email: "" });
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("auth state changed");
        })
        return () => { unsubscribe() };
    }, [])
    const authInfo = { createUser, signIn, googleSignIn, logOut, user };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;