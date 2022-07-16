interface Props {
  type: 'h1' | 'h2' | 'p';
  text: string;
}

export default function Text(props: Props) {
  if (props.type === 'h1') {
    return <h1 className="text-6xl font-bold">{props.text}</h1>;
  } else if (props.type === 'h2') {
    return <h2 className="text-4xl font-bold">{props.text}</h2>;
  } else {
    return <p className="text-center my-6">{props.text}</p>;
  }
}
