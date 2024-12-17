import { Route, Routes } from "react-router-dom"
import App from "./App"
// import FormEditLivros from "./components/FormEditLivros"
// import FormLivros from "./components/FormLivros"
// import Home from "./components/Home"
import Galeria from "./components/galeria"
import Login from "./components/login"
import Perfil from "./components/perfil"

// import ListCardLivros from "./components/ListCardLivros"

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Galeria />}></Route>
                <Route path="/perfil" element={<Perfil />}></Route>
                <Route path="/cadastro" element={<Galeria />}></Route>
                <Route path='/login' element={<Login />}></Route>

            </Route>            
        </Routes>
    )
}