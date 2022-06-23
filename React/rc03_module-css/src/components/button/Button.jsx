import btnStyle from "./Button.module.css";

const Button = ({ btnName }) => {
  return (
    <div className={btnStyle.title}>
      <button className={btnStyle["btn-blue"]}>{btnName} </button>
    </div>
  );
};

export default Button;
