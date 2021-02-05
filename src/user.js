import { useDispatch } from 'react-redux'
import {setActiveUserId} from './action/index'

const User = ({user})=>{
    const {name, profile_pic, status, user_id } = user
    const dispatch = useDispatch()
    return(
        <div className="User" onClick={()=>dispatch(setActiveUserId(user_id))}>
            <img src={profile_pic} alt={name} className="user-pic" />
                <div className="user-details">
                    <p className="user-details-name"> {name} </p>
                    <p className="user-details-status"> {status} </p>
                </div>
        </div>
    )
}

export default User