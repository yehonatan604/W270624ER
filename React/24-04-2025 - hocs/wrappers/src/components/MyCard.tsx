import { ReactNode } from "react";

type MyCardProps = {
  children: ReactNode;
};

const MyCard = (props: MyCardProps) => {
  return (
    <div className="justify-content-center align-items-center flex flex-col p-2 text-white shadow-lg shadow-amber-200">
      {props.children}
    </div>
  );
};

export default MyCard;
