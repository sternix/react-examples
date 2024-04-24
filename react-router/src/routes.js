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

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'blog',
                element: <BlogLayout />,
                children: [
                    {
                        index: true,
                        element: <Blog />,
                    },
                    {
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'post/:id',
                        element: <Post />
                    },
                    {
                        path: '*',
                        element: <BlogNotFound />
                    }
                ]
            },
            {
                path: 'profile',
                element: <Profile />,
                auth: true,
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]

const authMap = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }

    if (route?.children) {
        route.children = authMap(route.children)
    }

    return route
})

export default authMap(routes)