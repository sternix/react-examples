import { Outlet, NavLink} from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/test">İletişim</NavLink>
            </nav>
            <Outlet />
        </>)
}

export default Layout