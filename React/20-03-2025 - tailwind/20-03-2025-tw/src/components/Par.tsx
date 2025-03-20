type ParProps = {
  color: string;
};

const Par = (props: ParProps) => {
  const textColor = `text-${props.color}`;

  return (
    <p className={`text-2xl ${textColor}`}>
      {"This is a paragraph ".repeat(20)}
    </p>
  );
};

export default Par;
