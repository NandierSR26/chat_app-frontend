import React, { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { ChatContext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div 
                className="msg_history"
                id='mensajes'
            >

                {
                    chatState.mensajes.map(msg => (
                        (msg.para === auth.uid)
                            ? <IncomingMessage
                                key={msg._id}
                                mensaje={msg}
                            />
                            : <OutgoingMessage 
                                key={msg._id} 
                                mensaje={msg}
                            />
                    ))
                }



            </div>
            {/* <!-- Historia Fin --> */}

            <SendMessage />

        </div>
    )
}
