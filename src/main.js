import { useSelector } from "react-redux"

import Empty from "./empty";
import ChatWindow from "./chatWindow";

const Main = () =>{
    const user = useSelector(state=>state.userReducer)
    const activeUserID = useSelector(state=>state.activeUserIDReducer)
    return(
        <main className="Main">
            {
                !activeUserID && <Empty user={user} />
            }
            {
                activeUserID && <ChatWindow activeUserID={activeUserID}/>
            } 
        </main>
    )
}

export default Main