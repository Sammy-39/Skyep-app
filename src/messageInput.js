import { useDispatch, useSelector } from "react-redux"
import { setTypingValue, sendMessage } from "./action/index"

const MessageInput = ({value}) =>{
    const dispatch = useDispatch()
    const {typingReducer, activeUserIDReducer} = useSelector(state=>state)

    const handleChange = (e) =>{
        dispatch(setTypingValue(e.target.value))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(sendMessage(typingReducer,activeUserIDReducer))
        dispatch(setTypingValue(""))
    }

    return(
        <form className="Message" onSubmit={handleSubmit}>
            <input className="message__input" onChange={handleChange}
            value={value} placeholder="write a message" />
        </form>
    )
}

export default MessageInput