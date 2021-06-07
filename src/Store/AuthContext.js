import React from 'react'

const AuthContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('authState'));

const initialState ={
    name:null,
    email:null,
    accessToken:null,
    id:null,
    picture:null,
    facebookPage:{},
    instaPage:{}
}

function authReducer(state,action){
    switch(action.type){
        case'login':{
            return{
                ...state,
                name:action.payload.name,
                email:action.payload.email,
                accessToken:action.payload.accessToken,
                id:action.payload.id,
                picture: action.payload.picture,
            }
        }
        case'facebookInfos':{
            return{
                ...state,
                facebookPage:action.payload,
            }
        }
        case'instaInfos':{
            return{
                ...state,
                instaPage:action.payload,
            }
        }

        default:{
            return state;
        }
    }
}

function AuthProvider({children}) {
    const [authState, authDispatch] = React.useReducer(authReducer, localState || initialState)
    
    React.useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState))
    }, [authState])
    
    return (
    <AuthContext.Provider value={{authState, authDispatch}}>
    {children}
    </AuthContext.Provider>
    )
   }
    
   export { AuthProvider, AuthContext }