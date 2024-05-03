import { Outlet, NavLink} from "react-router-dom"

function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/contact">İletişim</NavLink>
                <NavLink className="navLink" to="/profile">Profil</NavLink>
                <NavLink className="navLink" to="/search">Ara</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
            <Outlet />
        </>)
}

export default HomeLayout