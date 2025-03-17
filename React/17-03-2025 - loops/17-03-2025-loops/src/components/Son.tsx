type SonProps = {
  name: string;
  age: number;
};

const Son = (props: SonProps) => {
  const { name, age } = props;

  const titleColor = age > 30 ? "red" : "skyblue";

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
