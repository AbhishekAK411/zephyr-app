import { createContext, useEffect, useReducer } from "react";
import api from "../Utils/Axiosconfig";

export const authContext = createContext();

const initialState = {user: null};

const reducer = (state,action) => {
    switch(action.type){
        case "login":
            return {...state, user: action.payload}
        case "logout":
            return {...state, user: null}
        default:
            return state;
    }
}

const HandleAuthContext = ({ children } ) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const login = (userData) => {
        if(userData.token){
            localStorage.setItem("blog", JSON.stringify(userData.token));
        }
        dispatch({
            type: "login",
            payload: userData.payload,
        });
    }

    const logout = () => {
        localStorage.removeItem("blog");
        dispatch({
            type: "logout"
        });
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("blog"));
        const getUser = async() => {
            if(token){
                const response = await api.post("/getCurrentUser", { token });
                if(response?.data?.success){
                    dispatch({
                        type: "login",
                        payload: response?.data?.data
                    })
                }
            }
        }
        getUser();

        const handleStorageEvent = async(e) => {
            if(e.key === "blog"){
                const token = JSON.parse(e.newValue);
                if(token){
                    const response = await api.post("/getCurrentUser", {token});
                    if(response?.data?.success){
                        dispatch({
                            type: "login",
                            payload: response?.data?.data,
                        });
                    }else{
                        dispatch({
                            type: "logout"
                        });
                    }
                }
            }
        }

        window.addEventListener("storage", handleStorageEvent);
            return () => {
                window.removeEventListener("storage", handleStorageEvent);
        }
    }, []);

    return (
        <authContext.Provider value={{state, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export default HandleAuthContext;
