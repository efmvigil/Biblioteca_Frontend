import LivroService from "../service/LivroService";
import { useState, useEffect } from "react";
import LivroRetirado from "../service/LivroRetirado";


export default function ModalLivro({ id, fecharModal }) {
  const [apenasLivro, setLivros] = useState(null);

  useEffect(() => {
    LivroService.UmLivro(id).then((livro) => setLivros(livro));
  }, [id]);
  const AlugarLivro = async () => {
    try {
      await LivroRetirado.InserirLivroRetirado(livro.id);
      alert("Livro alugado com sucesso!");
      setShowModal(false); 
    } catch (error) {
      console.error("Erro ao alugar o livro:", error);
      alert("Erro ao alugar o livro. Verifique se você está logado.");
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabIndex="-1"
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
                <div className="txt-modal">
                  <h4 className="">Titulo: {apenasLivro.titulo}</h4>
                  <h6 className="">Autor: {apenasLivro.autor}</h6>
                  <h6 className="">Editora: {apenasLivro.editora}</h6>
                  <p>Descrição: {apenasLivro.descricao}</p>
                </div>

                <button className="btn btn-success" onClick={AlugarLivro}>Alugar</button>
               
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
