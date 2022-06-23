import styles from "./Message.css";

const Msg = (props) => {
  const { name } = props; // destructer
  return (
    <div className={styles.primary}>
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
