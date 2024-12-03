import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className="card__details">
        <div className="card__details__top">
          <h2 className="title">{props.title}</h2>
        </div>

        <div className="card__details__middle">{props.data.description}</div>
        <div className="button__container">
          <a href={props.demoLink} target="_blank" className="link">
            {" "}
            Demo Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
