import { Outlet, NavLink } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <NavLink to="/">Anasayfa</NavLink>
                <NavLink to="/stack">Stack</NavLink>
                <NavLink to="/alert">Alert</NavLink>
                <NavLink to="/dropdown">Dropdown</NavLink>
                <NavLink to="/container">Container</NavLink>
                <NavLink to="/responsive-container">Responsive Container</NavLink>
                <NavLink to="/offsetting">Offsetting</NavLink>
                <NavLink to="/basic-form">Basic Form</NavLink>
                <NavLink to="/accordion">Accordion</NavLink>
                <NavLink to="/table">Table</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout