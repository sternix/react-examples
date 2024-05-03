import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout"
import StackPage from "./pages/StackPage"
import AlertPage from "./pages/AlertPage";
import DropdownPage from "./pages/Dropdown";
import ContainerPage from "./pages/ContainerPage";
import ResponsiveContainer from "./pages/ResponsiveContainer";
import OffsettingPage from "./pages/OffsettingPage";
import BasicForm from "./pages/BasicForm";
import AccordionPage from "./pages/AccordionPage";
import TablePage from "./pages/TablePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="stack" element={<StackPage />} />
                        <Route path="alert" element={<AlertPage />} />
                        <Route path="dropdown" element={<DropdownPage />} />
                        <Route path="container" element={<ContainerPage />} />
                        <Route path="responsive-container" element={<ResponsiveContainer />} />
                        <Route path="offsetting" element={<OffsettingPage />} />
                        <Route path="basic-form" element={<BasicForm />} />
                        <Route path="accordion" element={<AccordionPage />} />
                        <Route path="table" element={<TablePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App