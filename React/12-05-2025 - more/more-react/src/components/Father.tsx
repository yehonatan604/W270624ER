import Son1 from "./Son1";
import Son2 from "./Son2";

const Father = () => {
  return (
    <div className="flex flex-col gap-4">
      <Son1 />
      <Son2 />
    </div>
  );
};

export default Father;
