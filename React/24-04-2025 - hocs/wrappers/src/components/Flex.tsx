import { ReactNode } from "react";

export enum FlexDirectionTypes {
  Row = "row",
  Col = "col",
}

type FlexProps = {
  children: ReactNode;
  direction: FlexDirectionTypes;
};

const Flex = (props: FlexProps) => {
  const flexDir = props.direction === "row" ? "flex-row" : "flex-col";

  return (
    <div
      className={`justify-content-center align-items-center flex ${flexDir} p-2 text-white shadow-lg shadow-amber-200`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
