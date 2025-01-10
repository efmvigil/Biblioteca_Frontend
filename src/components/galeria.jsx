import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LivroService from "../service/LivroService";
import CardLivro from "./CardLivro_new";
import Carroussel from "./Carroussel";
import "./galeria.css";

export default function Galeria() {
  const [listaLivros, setListaLivros] = useState([]); 
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const titulovar = queryParams.get("titulo");
  const titulooficial = {
    titulo: titulovar
    };
  useEffect(() => {
    if (titulovar) {
      LivroService.LivroParecido(titulooficial).then((livros) => setListaLivros(livros));
    } else {
      LivroService.listarLivros().then((livros) => setListaLivros(livros));
    }
  }, [titulovar]);

  return (
    <section className="galeria">
      <Carroussel />
      <div className="row">
        {listaLivros.length > 0 ? (
          listaLivros.map((livro) => <CardLivro key={livro.id} livro={livro} />)
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </div>
    </section>
  );
}
