// type SonProps = {
//   name: string;
//   age: number;
// };
//

interface SonProps {
  name: string;
  age: number;
}

function Son(props: SonProps) {
  const { name, age } = props;

  return (
    <>
      <h1>Son: {name}</h1>
      <h2>Age: {age}</h2>
    </>
  );
}

export default Son;
