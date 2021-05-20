import React from 'react'

const Notification = ({ message }) => {
    const content = message[0];
    const color = message[1];
    const notificationStyle = {
        color: color,
        background: "lightgray",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
    }

    if (content === null) {
        return null;
    }
        
    return (
        <div style={notificationStyle}>
            {content}
        </div>
    );
}

export default Notification;