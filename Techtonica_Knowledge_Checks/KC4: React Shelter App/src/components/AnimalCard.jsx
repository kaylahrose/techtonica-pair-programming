const AnimalCard = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.imageUrl} alt={props.title} className="img" />
    </div>
  );
};

export default AnimalCard;
