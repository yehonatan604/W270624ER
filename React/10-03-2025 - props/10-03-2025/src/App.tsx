function App() {
  const randomNum = Math.random();
  const randomBool = randomNum > 0.5;

  return (
    <>
      <h1 style={{ color: randomBool ? "blue" : "red" }}>
        Random Number is above 0.5: {randomBool ? "YES" : "NO"} : {randomNum}
      </h1>
    </>
  );
}

export default App;
