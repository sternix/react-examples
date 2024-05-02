import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout';
import AlertPage from './pages/AlertPage';
import BackdropPage from './pages/BackdropPage';
import ButtonPage from './pages/ButtonPage';
import CheckboxPage from './pages/CheckboxPage';
import SnackbarPage from './pages/SnackbarPage';

function App() {
    return (
        <>
            {/*  css reset normalize yapıyor */}
            <CssBaseline />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="button" element={<ButtonPage />} />
                        <Route path="alert" element={<AlertPage />} />
                        <Route path="backdrop" element={<BackdropPage />} />
                        <Route path="checkbox" element={<CheckboxPage />} />
                        <Route path="snackbar" element={<SnackbarPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App



