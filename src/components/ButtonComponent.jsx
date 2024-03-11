const ButtonComponent = function (props) {
  return (
    <>
      <button
        style={{ backgroundColor: props.titleColor, borderRadius: "10px", marginTop: "5px" }}
        className="btn my-2 mioBottone"
      >
        {props.nome}
      </button>
    </>
  );
};
export default ButtonComponent;
