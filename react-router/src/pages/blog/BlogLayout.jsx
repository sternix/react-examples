import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom";

function BlogLayout() {
  return (
    <div>
      Blog Layout
      <nav>
        <NavLink className="navLink" to="/blog/categories">Kategoriler</NavLink>
        <NavLink to="/blog/post/28">Post</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default BlogLayout