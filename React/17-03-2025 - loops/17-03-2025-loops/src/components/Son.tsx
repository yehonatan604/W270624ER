type SonProps = {
  name: string;
  age: number;
};

const Son = (props: SonProps) => {
  const { name, age } = props;

  return (
    <div>
      <p>
        Hello! my name is {name} and I am {age} years old.
      </p>
    </div>
  );
};

export default Son;
