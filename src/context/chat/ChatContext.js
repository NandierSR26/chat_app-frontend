import React, { createContext, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
    usuarios: [], // todos los usuarios de la base de datos
    mensajes: [], // el chat de la base de datos
}

export const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer(ChatReducer, initialState)

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
           { children } 
        </ChatContext.Provider>
    )
}