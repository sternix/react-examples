import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hover from "./pages/Hover"
import OnWindowScroll from "./pages/OnWindowScroll";
import EventListener from "./pages/EventListener";
import WindowSize from "./pages/WindowSize";
import Unload from "./pages/Unload";
import KeyPress from "./pages/KeyPress";
import ReqAnimationFrame from "./pages/ReqAnimationFrame";
import Update from "./pages/Update";
import MergeState from "./pages/MergeState";
import PersistedState from "./pages/PersistedState";
import ClickInside from "./pages/ClickInside";
import ClickOutside from "./pages/ClickOutside";
import NavigatorOnLine from "./pages/NavigatorOnLine";
import Toggler from "./pages/Toggler";
import Debounce from "./pages/Debounce";
import EffectOnce from "./pages/EffectOnce";
import Form from "./pages/Form";
import Hash from "./pages/Hash";
import LocalStorage from "./pages/LocalStorage";
import Timeout from "./pages/Timeout";
import Interval from "./pages/Interval";
import Previous from "./pages/Previous";
import SearchParam from "./pages/SearchParam";
import Fetch from "./pages/Fetch";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="use-hover" element={<Hover />} />
                    <Route path="use-onwindow-scroll" element={<OnWindowScroll />} />
                    <Route path="use-event-listener" element={<EventListener />} />
                    <Route path="use-window-size" element={<WindowSize />} />
                    <Route path="use-unload" element={<Unload />} />
                    <Route path="use-keypress" element={<KeyPress />} />
                    <Route path="use-requestanimation-frame" element={<ReqAnimationFrame />} />
                    <Route path="use-update" element={<Update />} />
                    <Route path="use-merge-state" element={<MergeState />} />
                    <Route path="use-persisted-state" element={<PersistedState />} />
                    <Route path="use-click-inside" element={<ClickInside />} />
                    <Route path="use-click-outside" element={<ClickOutside />} />
                    <Route path="use-online-status" element={<NavigatorOnLine />} />
                    <Route path="use-toggler" element={<Toggler />} />
                    <Route path="use-debounce" element={<Debounce />} />
                    <Route path="use-run-once" element={<EffectOnce />} />
                    <Route path="use-form" element={<Form />} />
                    <Route path="use-hash" element={<Hash />} />
                    <Route path="use-local-storage" element={<LocalStorage />} />
                    <Route path="use-timeout" element={<Timeout />} />
                    <Route path="use-interval" element={<Interval />} />
                    <Route path="use-previous" element={<Previous />} />
                    <Route path="use-search-param" element={<SearchParam />} />
                    <Route path="use-fetch" element={<Fetch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
