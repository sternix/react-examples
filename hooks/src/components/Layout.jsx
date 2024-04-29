import { Outlet, NavLink } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <NavLink to="/">Anasayfa</NavLink>
                <NavLink to="/use-hover">useHover</NavLink>
                <NavLink to="/use-onwindow-scroll">useOnWindowScroll</NavLink>
                <NavLink to="/use-event-listener">useEventListener</NavLink>
                <NavLink to="/use-window-size">useWindowSize</NavLink>
                <NavLink to="/use-unload">useUnload</NavLink>
            </nav>
            <Outlet />
        </>)
}

export default Layout