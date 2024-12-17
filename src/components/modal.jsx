import LivroService from "../service/LivroService";
import { useState, useEffect } from "react";

export default function ModalLivro({ id, fecharModal }) {
  const [apenasLivro, setLivros] = useState(null);

  useEffect(() => {
    LivroService.UmLivro(id).then((livro) => setLivros(livro));
  }, [id]);

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabindex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Detalhes do Livro</h1>
            <button type="button" className="btn-close" onClick={fecharModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {apenasLivro ? (
              <>
              
                <img className="" src={apenasLivro.imagem} alt={apenasLivro.titulo} height="200px" /> 
                <h4 className="">Titulo: {apenasLivro.titulo}</h4>
                <h6 className="">Autor: {apenasLivro.autor}</h6>
                <h6 className="">Editora: {apenasLivro.editora}</h6>
                <p>Descrição: {apenasLivro.descricao}</p>
              
               
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
