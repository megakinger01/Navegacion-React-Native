import { AuthState } from "./AuthContext";


type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavicon', payload: string }
    | { type: 'changeUserName', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-userName- Yet'
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                iconFavorite: undefined
            }

        case 'changeFavicon':
            return {
                ...state,
                iconFavorite: action.payload
            }

        case 'changeUserName':
            return {
                ...state,
                userName: action.payload
            }

        default:
            return state
    }
}