import { useState } from "react";
import LivroRetirado from "../service/LivroRetirado";
import ModalLivro from "./modal";

export default function CardLivro({ livro }) {
  const [showModal, setShowModal] = useState(false); 


  const AlugarLivro = async () => {
    try {
      await LivroRetirado.InserirLivroRetirado(livro.id);
      alert("Livro alugado com sucesso!");
      setShowModal(false); 
    } catch (error) {
      if(error.response.data.codigo == 409){
        console.error("Livro Já Alugado!", error);
        alert("Este Livro Já foi Alugado por outra Pessoa.");
      }else{
        console.error("Erro ao alugar o livro:", error);
        console.log(error)
        alert("Erro ao alugar o livro. Verifique se você está logado.");
      }

    }
  };

  const VizualizarLivro = (e) => {
    e.stopPropagation();
    setShowModal(true); 
  };

  const fecharModal = () => {
    setShowModal(false); 
  };

  return (
    <>
      <div className="col-lg-2 mt-3 cardlivro">
        <div className="container-sm">
          <div className="livro-card">
            <img src={livro.imagem} alt={"Imagem-"+livro.titulo} height="200px" onClick={VizualizarLivro} />
            <h4>{livro.titulo}</h4>

            <button className="btn btn-success" onClick={AlugarLivro}>Alugar </button>
          </div>
        </div>
      </div>

      {showModal && <ModalLivro id={livro.id} fecharModal={fecharModal} />}
    </>
  );
}
