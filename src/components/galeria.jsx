// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import LivroService from "../service/LivroService";
import CardLivro from "./CardLivro_new";

export default function Galeria() {

  const [listaLivros, setListaLivros] = useState([]);

  useEffect(() => {
      LivroService.listarLivros().then((livros) => setListaLivros(livros));
  }, [])

  return (
    <section className="container">
        <div className="row ">
            { listaLivros.map(livro => 
                <CardLivro key={livro.id} livro={livro} />
            )  } 
    </div>
    </section>
  );
}
