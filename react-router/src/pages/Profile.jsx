import { useAuth } from "../context/AuthContext"

function Profile() {
    const { setUser } = useAuth()

    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <div>Profile<br />
            <button onClick={logoutHandle} >Çıkış Yap</button>
        </div>
    )
}

export default Profile