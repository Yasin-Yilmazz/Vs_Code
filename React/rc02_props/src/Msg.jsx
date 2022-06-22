const Msg = (props) => {
  const { name } = props; // destructer
  return (
    <div>
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
