import { useState } from "react";
import ModalLivro from "./modal";

export default function CardLivro({ livro }) {
  const [showModal, setShowModal] = useState(false); // Controla a exibição do modal

  const VizualizarLivro = (e) => {
    e.stopPropagation(); 
    setShowModal(true);  
  };

  const fecharModal = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    <>
      <div className="col-lg-2 mt-3 cardlivro">
        <div className="container-sm">
          <div className="livro-card">
            <img src={livro.imagem} alt={livro.titulo} height="200px" onClick={VizualizarLivro} />
            <h4>{livro.titulo}</h4>
            <button className="btn btn-success" onClick={VizualizarLivro}>
              Alugar
            </button>
          </div>
        </div>
      </div>

      {showModal && <ModalLivro id={livro.id} fecharModal={fecharModal} />}
    </>
  );
}
