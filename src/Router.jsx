import { Route, Routes } from "react-router-dom"
import App from "./App"
import Galeria from "./components/galeria"
import Login from "./components/login"
import Perfil from "./components/perfil"
import Cadastro from "./components/Cadastro"

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Galeria />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/login" element={<Login />} />
            </Route>

            
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    );
}