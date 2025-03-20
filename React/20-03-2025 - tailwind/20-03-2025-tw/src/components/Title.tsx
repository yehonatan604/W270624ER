type TitleProps = {
  title: string;
  color: string;
};

const Title = (props: TitleProps) => {
  const textColor = `text-${props.color}`;

  return <h1 className={`text-4xl ${textColor}`}>{props.title}</h1>;
};

export default Title;
