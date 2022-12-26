const Header = ({user, setUser}) => {
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        .then(r => {
            if (r.ok)
                setUser(null)
        })
    }

    return (
        <div id="header">
            <h1 id="maintitle">Tooter</h1>
            {user ? <button id="logout-button" onClick={handleLogout}>Log out</button> : null}
        </div>
    )
}

export default Header