import Son from "./Son";

const Father = () => {
  return (
    <div>
      <h1>Father</h1>
      <Son name="Adi" age={25} />
      <Son name="Israel" age={27} />
      <Son name="Yosi" age={34} />
    </div>
  );
};

export default Father;
