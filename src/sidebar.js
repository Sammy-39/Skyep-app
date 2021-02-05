import User from './user'

import {useSelector} from 'react-redux'
import _ from 'lodash'

const Sidebar = () =>{
    const {contacts} = useSelector(state=>state.contactsReducer)
    const contactsList = _.values(contacts)
    return (
    <aside className="Sidebar">
        { contactsList.map(contact => <User user={contact} key={contact.user_id} />) } 
    </aside>
    )
}

export default Sidebar