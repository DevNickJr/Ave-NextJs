"use client"
import { IUser } from "@/interfaces";
import { ReactNode, Reducer, createContext, useEffect, useReducer } from "react";

interface IAuthContext {
    isLoggedIn: boolean
    user: IUser
}

const init: IUser = {
    _id: '',
    balance: 0,
    bonus: 0,
    total_deposit: 0,
    total_withdrawal: 0,
    status: '',
    is_admin: false,
    document: {
        front: '',
        back: '',
    },
    email: '',
    password: '',
    first_name: '',      
    last_name: '',    
    nationality: '',
    currency: '',
}

let user = null
if (typeof window !== "undefined" && localStorage) {
    user = localStorage.getItem("user") 
}

const initialState: IAuthContext = user ? JSON.parse(user) : {
    isLoggedIn: false,
    user: init,
};

interface IAction {
    type: "LOGIN" | "LOGOUT"
    payload: any
}

interface IAuthContextProvider extends IAuthContext {
    dispatch: React.Dispatch<IAction>
}


const initAuthContext: IAuthContextProvider = {
    isLoggedIn: false,
    user: init,
    dispatch: (): void => {}
}

export const AuthContext = createContext<IAuthContextProvider>(initAuthContext)



export const authReducer = (state: IAuthContext, action: IAction) => {
    switch (action.type) {
        case "LOGIN":
            console.log("action.payload", action.payload)
            localStorage.setItem("user", JSON.stringify({
                isLoggedIn: true,
                user: action.payload
            }))
            return {
                isLoggedIn: true,
                user: action.payload
            }
        case "LOGOUT":
            localStorage.removeItem("user")
            return {
                isLoggedIn: true,
                user: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children} : { children: ReactNode }) => {
    const [state, dispatch] = useReducer<Reducer<IAuthContext, IAction>>(authReducer, initialState)

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            const user: IAuthContext = JSON.parse(auth)
            dispatch({type: "LOGIN", payload: user.user })
        }
    }, [dispatch])
    
    // console.log("Auth State", state)
    return (
        <AuthContext.Provider value={{user: state.user, isLoggedIn: state.isLoggedIn, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}