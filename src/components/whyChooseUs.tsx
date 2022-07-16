import { useEffect, useState } from 'react';
import { useClient } from '../utils/contentful';
import Services from './services';

export default function WhyChooseUs() {
  const { client } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res: any = await client.getEntries({ content_type: 'whyChooseUs' });
    setData(res.items);
  }

  return (
    <div className="h-auto my-10 md:my-0 md:h-[90vh] flex align items-center justify-center flex-col">
      <h2 className="text-4xl font-bold">Why Choose Us?</h2>
      <p className="text-center my-6">
        We have decades of experience, having successfully recruited across the <br /> globle for
        many years.
      </p>
      <div className="grid md:grid-cols-3 align items-center justify-items-center w-[100%] md:w-[80%]">
        {data.map((item: any) => {
          return <Services item={item} key={item.sys.id} />;
        })}
      </div>
    </div>
  );
}
