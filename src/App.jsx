import React, { useEffect, useState } from "react"
import './App.css'
//import LivroService from "./service/LivroService";
import CardLivro from "./components/CardLivro_new";
import Galeria from "./components/galeria";

export default function App() {

  return (

    <div className="galeria">
      <Galeria/>
    </div>
  );
}
