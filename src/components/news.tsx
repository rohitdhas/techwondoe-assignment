import { useClient } from "../utils/contentful";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function News() {
  const { client } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    const res: any = await client.getEntries({ content_type: "news" });
    console.log(res.items);
    setData(res.items);
  }

  return (
    <div className="h-[80vh] flex justify-center align items-center">
      <div className="w-[70%]">
        <div className="flex justify-between mb-10">
          <h4 className="text-3xl font-bold">Latest News</h4>
          <button className="px-6 py-2 bg-[#E6692E] hover:bg-orange-600 text-white rounded-sm">
            View All
          </button>
        </div>
        <div className="flex justify-between align items-center">
          {data.map((item: any) => {
            return (
              <div key={item.sys.id}>
                <img
                  src={`https:${item.fields.banner.fields.file.url}`}
                  alt="news banner"
                />
                <p className="text-gray-600 font-bold text-sm my-4">
                  by {item.fields.author} | {item.fields.date}
                </p>
                <p className="font-bold">{item.fields.title}</p>
                <p className="text-[#E6692E] font-bold mt-3 cursor-pointer hover:underline">
                  Read more{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
