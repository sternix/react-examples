import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./Example"
import Layout from "./Layout";

const Test = () => (
    <div>TEST</div>
)

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Example />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App
