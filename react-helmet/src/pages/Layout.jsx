import { NavLink, Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            <nav>
                <NavLink className="link-item" to="/">Anasayfa</NavLink>
                <NavLink className="link-item" to="/products">Ürünlerimiz</NavLink>
                <NavLink className="link-item" to="/about">Hakkımızda</NavLink>
                <NavLink className="link-item" to="/contact">İletişim</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout