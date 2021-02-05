import { useSelector } from 'react-redux'
import Chats from './chats'
import Header from './header'

import _ from "lodash"
import MessageInput from './messageInput'


const ChatWindow = ({activeUserID}) =>{
    const state = useSelector(state=>state)
    const activeUser = state.contactsReducer.contacts[activeUserID]
    const activeMsgs = _.values(state.messagesReducer[activeUserID])
    const typing = state.typingReducer
    
    return(
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={activeMsgs}/>
            <MessageInput value={typing} />
        </div>   
    )
}

export default ChatWindow