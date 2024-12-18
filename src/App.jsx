import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom"

import './App.css';
//import LivroService from "./service/LivroService";
import CardLivro from './components/CardLivro_new';
import Galeria from './components/galeria';
import Menu from './components/header';
import Login from './components/login';
import Perfil from './components/perfil';

export default function App() {
  return (
    <>
    <header>
      <Menu></Menu>
    </header>
      <main>
        <div className="container mt-3">          
          <Outlet> </Outlet>
        </div>
      </main>
      
    </>
  );
}
