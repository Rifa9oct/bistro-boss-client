import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic"

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(false);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //observe on state change
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                //get token and store localStorage
                const userInfo = { email: currentUser.email };
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token){
                            localStorage.setItem("access-token",res.data.token);
                        }
                })


            }
            else {
                localStorage.removeItem("access-token");
            }
            setLoading(false);
        })
        return () => {
            unSubsCribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        createUser,
        signinUser,
        loading,
        logOut,
        login,
        setLogin,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;