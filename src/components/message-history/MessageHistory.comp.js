import React from "react"
import {PropTypes} from "prop-types"
import "./message-history.style.css"

export const MessageHistory = ({msg}) => {
    if (!msg) return null

    return msg.map((obj, i) => (
        <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold text-secondary">
                <div className="sender">
                    {obj.messageBy} 
                </div>
                <div className="date">
                    {obj.date}
                </div>
            </div>
            <div className="message">
                {obj.message}
            </div>
        </div>
    ))
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}