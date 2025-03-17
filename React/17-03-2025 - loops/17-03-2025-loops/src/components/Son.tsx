type SonProps = {
  name: string;
  age: number;
};

const Son = (props: SonProps) => {
  const { name, age } = props;

  const titleColor = age > 30 ? "red" : "skyblue";

  //                                            max  min  min
  const randomNum = Math.floor(Math.random() * (100 - 1) + 1); // Random number between 1 and 100
  console.log(randomNum);

  return (
    <div>
      <h1 style={{ color: titleColor }}>{name}</h1>
      {age > 30 && (
        <p>
          Hello! my name is {name} and I am {age} years old.
        </p>
      )}
    </div>
  );
};

export default Son;
