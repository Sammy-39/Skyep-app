import { useEffect, useRef } from "react"

const Chat = ({message}) =>{
    const { text, is_user_msg } = message

    const scrollBottomRef = useRef()

    const  scrollToBottom = () =>{
        scrollBottomRef.current && scrollBottomRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{
        scrollToBottom()
    },[message])

    return(
        <span className={is_user_msg ? "is-user-msg chat" : "chat"} ref={scrollBottomRef} > {text} </span>
    )
}

const Chats = ({messages}) =>{
    return(
        <div className="Chats">
            {messages.map((message,idx) => (
                <Chat message={message} key={message.number}/>
            ))}
        </div>
    )
}

export default Chats