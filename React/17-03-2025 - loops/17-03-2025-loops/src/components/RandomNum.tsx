type RandomNumProps = {
  min: number;
  max: number;
};

const RandomNum = (props: RandomNumProps) => {
  const { min, max } = props;

  const randomNum = Math.floor(Math.random() * (max - min) + min); // Random number between min and max

  return (
    <>
      {randomNum % 2 === 0 ? (
        <h1>{randomNum}</h1>
      ) : (
        <h1 style={{ color: "red" }}>{randomNum} is odd</h1>
      )}
    </>
  );
};

export default RandomNum;
