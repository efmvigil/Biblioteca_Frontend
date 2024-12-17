import React, { useEffect, useState } from 'react';
import './App.css';
//import LivroService from "./service/LivroService";
import CardLivro from './components/CardLivro_new';
import Galeria from './components/galeria';
import Card from './components/card';
import Login from './components/login';
import Perfil from './components/perfil';

export default function App() {
  return (
    <>
      <div className="galeria">
        <Galeria />
      </div>
      <Perfil />
      <Login />
    </>
  );
}
