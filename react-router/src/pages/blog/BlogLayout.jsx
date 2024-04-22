import { Outlet } from "react-router-dom"

function BlogLayout() {
  return (
    <div>
      Blog Layout
      <Outlet />
    </div>
  )
}

export default BlogLayout