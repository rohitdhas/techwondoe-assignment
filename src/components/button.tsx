interface Props {
  label: string;
  type: 'primary' | 'secondary';
}

export default function Button(props: Props) {
  if (props.type === 'primary') {
    return (
      <button className="px-6 py-2 bg-[#E6692E] hover:bg-orange-600 text-white rounded-sm">
        {props.label}
      </button>
    );
  } else {
    return (
      <button className="px-6 py-2 bg-white hover:bg-gray-200 text-[#E6692E] rounded-sm">
        {props.label}
      </button>
    );
  }
}
