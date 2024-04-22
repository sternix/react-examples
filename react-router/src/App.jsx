import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import BlogLayout from "./pages/blog/BlogLayout"
import Blog from "./pages/blog/Blog"
import Categories from "./pages/blog/Categories"
import Post from "./pages/blog/Post"
import BlogNotFound from "./pages/blog/BlogNotFound";

function App() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">İletişim</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
            <Routes>
                {/* / */}
                <Route path="/" element={<Home />} />

                {/* /contact */}
                <Route path="/contact" element={<Contact />} />

                <Route path="/blog" element={<BlogLayout />} >
                    {/* /blog */}
                    <Route index element={<Blog />} />

                    {/* /blog/categories */}
                    <Route path="categories" element={<Categories />} />

                    {/* /blog/post/1 */}
                    <Route path="post/:id" element={<Post />} />

                    {/* /blog/OLMAYAN ROUTE */}
                    <Route path="*" element={<BlogNotFound />} />
                </Route>

                {/* geri kalan ne varsa */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>)
}

export default App
