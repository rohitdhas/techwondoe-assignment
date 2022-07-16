import { useClient } from '../utils/contentful';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from './button';

export default function News() {
  const { client } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res: any = await client.getEntries({ content_type: 'news' });
    console.log(res.items);
    setData(res.items);
  }

  return (
    <div className="h-auto my-10 md:my-0 md:h-[80vh] flex justify-center align items-center">
      <div className="w-full px-4 md:px-0 md:w-[70%]">
        <div className="flex justify-between mb-10">
          <h4 className="text-3xl font-bold">Latest News</h4>
          <Button label="View All" type="primary" />
        </div>
        <div className="flex flex-col md:flex-row justify-between align items-center">
          {data.map((item: any) => {
            return (
              <div key={item.sys.id} className="my-4 md:my-0">
                <img src={`https:${item.fields.banner.fields.file.url}`} alt="news banner" />
                <p className="text-gray-600 font-bold text-sm my-4">
                  by {item.fields.author} | {item.fields.date}
                </p>
                <p className="font-bold">{item.fields.title}</p>
                <p className="text-[#E6692E] font-bold mt-3 cursor-pointer hover:underline">
                  Read more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
