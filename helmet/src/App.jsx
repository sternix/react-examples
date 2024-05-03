import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="products" element={<Products />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
