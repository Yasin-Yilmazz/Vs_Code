import Button from "../button/Button";
import cardStyle from "./Card.module.css";

const Card = ({ img, btnName, dil }) => {
  return (
    <div>
      <h1 className={cardStyle.title}>{dil}</h1>
      <img className="images" src={img} alt="" />
      <Button btnName={btnName} />
    </div>
  );
};

export default Card;
