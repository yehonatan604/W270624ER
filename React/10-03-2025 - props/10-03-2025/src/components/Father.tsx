import Son from "./Son";

function Father() {
  return (
    <>
      <h1>Father</h1>
      <Son name={"Yafit"} age={37} />
      <Son name={"Ofek"} age={27} />
      <Son name={"Shimon"} age={32} />
    </>
  );
}

export default Father;
