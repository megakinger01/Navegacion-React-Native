import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer'

// definir como luce información que tendré aquí
export interface AuthState {
    isLoggedIn: boolean,
    userName?: string,
    iconFavorite?: string
}

//  Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false
}

// lo  usaremos para decirle a React  como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}


// crear el context
export const AuthContext = createContext({} as AuthContextProps)

//  componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type:'signIn'})
    }

    
    const logout = () => {
        dispatch({ type:'logout'})
    }
    
    const changeFavIcon = ( iconName:string ) => {
        dispatch( { type:'changeFavicon', payload:iconName})
    }


    const changeUserName = ( userName:string ) => {
        dispatch({type:'changeUserName', payload: userName})
    }
     
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavIcon,
            changeUserName
        }}>
            { children}
        </AuthContext.Provider>
    )
}





