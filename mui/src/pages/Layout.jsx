import { Outlet, NavLink } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <NavLink to="/">Anasayfa</NavLink>
                <NavLink to="/button">Button</NavLink>
                <NavLink to="/alert">Alert</NavLink>
                <NavLink to="/backdrop">Backdrop</NavLink>
                <NavLink to="/checkbox">Checkbox</NavLink>
                <NavLink to="/snackbar">Snackbar</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout