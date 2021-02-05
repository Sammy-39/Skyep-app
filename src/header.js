
const Header = ({user}) =>{
    const {name, status, profile_pic} = user
    console.log(profile_pic)
    return(
        <header className="Header">
            <div className='header__top'>
                <h1 className="header__name">{name}</h1>
                <img src={profile_pic} alt={name} className="header__img" />
            </div>
            <p className="header__status">{status}</p>
        </header>
    )
}

export default Header