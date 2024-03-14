import "../components/cssFiles/card.css";

function Card(props) {
  const cssClasses = "card " + props.className;
  return <div className={cssClasses}>{props.children}</div>;
}

export default Card;
