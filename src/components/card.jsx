import './card.css';
import LivroRetiradoService from '../service/LivroRetirado.js';

function Card(props) {
  console.log(props.id);
  return (
    <div className="card">
      <img src={props.img} alt="Capa do livro" />
      <h3>{props.titulo}</h3>
      <button
        className="button"
        onClick={async () => {
          await LivroRetiradoService.devolver(props.id);
          alert(`${props.titulo} devolvido com sucesso`);
        }}
      >
        Devolver
      </button>
    </div>
  );
}

export default Card;
