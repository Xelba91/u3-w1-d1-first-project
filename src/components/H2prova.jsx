const H2prova = function (props) {
  return (
    <>
      <h2 style={{ borderRadius: "10px", padding: "5px", marginTop: "5px" }} className={props.class}>
        {props.titolo}{" "}
      </h2>
    </>
  );
};
export default H2prova;
