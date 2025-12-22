import { types } from "../types/types"
import { auth } from "../firebase/firebase-config";
import { startLoading, finishLoading, setError } from "./ui"; // <-- importa setError
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // Importa la función del SDK
import { signOut } from "firebase/auth"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                // Muestra el error en la UI
                dispatch(setError("contraseña incorrecta"));
                dispatch(finishLoading());
            })
    }
}

export const startRegisterEmailPassword = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                // console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const login = (uid, displayName) => {
    return ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })
}

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})