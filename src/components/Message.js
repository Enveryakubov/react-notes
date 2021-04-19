import React from 'react'


const Message = ({message}) => {
    
    const bgColor= message.bgColor
    return (
        <div style={{background:`${bgColor}`, height:"30px", }}>
            <p>{message.text}</p>
        </div>
    )
}

export default Message
