import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Hover from "./pages/Hover"
import OnWindowScroll from "./pages/OnWindowScroll";
import EventListener from "./pages/EventListener";
import WindowSize from "./pages/WindowSize";
import Unload from "./pages/Unload";

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
