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
                <NavLink to="/use-keypress">useKeyPress</NavLink>
                <NavLink to="/use-requestanimation-frame">useRequestAnimationFrame</NavLink>
                <br />
                <NavLink to="/use-update">useUpdate</NavLink>
                <NavLink to="/use-merge-state">useMergeState</NavLink>
                <NavLink to="/use-persisted-state">usePersistedState</NavLink>
                <NavLink to="/use-click-inside">useClickInside</NavLink>
                <NavLink to="/use-click-outside">useClickOutside</NavLink>
                <NavLink to="/use-online-status">useNavigatorOnLine</NavLink>
                <NavLink to="/use-toggler">useToggler</NavLink>
                <NavLink to="/use-debounce">useDebounce</NavLink>
                <br />
                <NavLink to="/use-run-once">useRunOnce</NavLink>
                <NavLink to="/use-form">useForm</NavLink>
                <NavLink to="/use-hash">useHash</NavLink>
                <NavLink to="/use-local-storage">useLocalStorage</NavLink>
                <NavLink to="/use-timeout">useTimeout</NavLink>
                <NavLink to="/use-interval">useInterval</NavLink>
                <NavLink to="/use-previous">usePrevious</NavLink>
                <NavLink to="/use-search-param">useSearchParam</NavLink>
                <br />
                <NavLink to="/use-fetch">useFetch</NavLink>
            </nav>
            <Outlet />
        </>)
}

export default Layout