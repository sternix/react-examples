import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import BlogLayout from "./pages/blog/BlogLayout"
import Blog from "./pages/blog/Blog"
import Categories from "./pages/blog/Categories"
import Post from "./pages/blog/Post"
import BlogNotFound from "./pages/blog/BlogNotFound";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import HomeLayout from "./pages/HomeLayout";
import AuthLayout from "./pages/auth/AuthLayout";
import Search from "./pages/Search";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    {/* / */}
                    <Route index element={<Home />} />

                    {/* /contact */}
                    <Route path="contact" element={<Contact />} />

                    {/* Blog'da HomeLayout içinde yani yukarıdaki Home, İletişim vs linkleri BlogLayout' unuda kapsıyor */}
                    <Route path="blog" element={<BlogLayout />} >
                        {/* /blog */}
                        <Route index element={<Blog />} />

                        {/* /blog/categories */}
                        <Route path="categories" element={<Categories />} />

                        {/* /blog/post/1 */}
                        <Route path="post/:id" element={<Post />} />

                        {/* /blog/OLMAYAN ROUTE */}
                        <Route path="*" element={<BlogNotFound />} />
                    </Route>

                    <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path="search" element={<Search />} />
                </Route>

                <Route path="/auth" element={<AuthLayout />} >
                    <Route path="login" element={<Login />} />
                </Route>

                {/* geri kalan ne varsa */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
