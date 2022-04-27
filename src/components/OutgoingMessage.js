import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const OutgoingMessage = ({ mensaje }) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{ mensaje.mensaje }</p>
                <span className="time_date">{ horaMes(mensaje.createdAt) }</span>
            </div>
        </div>
    )
}
