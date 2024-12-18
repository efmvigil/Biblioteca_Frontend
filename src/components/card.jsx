import './card.css';
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Capa do livro" />
      <h3>{props.titulo}</h3>
    </div>
  );
}

export default Card;
