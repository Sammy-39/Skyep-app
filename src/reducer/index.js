import userReducer from './user'
import contactsReducer from './contacts'
import activeUserIDReducer from './activeUserID'
import messagesReducer from './messages'
import typingReducer from './typing'

import {combineReducers} from 'redux'

export default combineReducers({
    userReducer,
    contactsReducer,
    activeUserIDReducer,
    messagesReducer,
    typingReducer
})