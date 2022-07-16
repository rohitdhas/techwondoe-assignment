import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Services({ item }: any) {
  return (
    <div className="my-4 flex justify-center">
      <FontAwesomeIcon className="text-orange-500 text-xl mr-4 mt-1" icon={faCheck} />
      <div className="w-[65%]">
        <h4 className="text-xl font-bold mb-4">{item.fields.title}</h4>
        <p>{item.fields.description}</p>
      </div>
    </div>
  );
}
