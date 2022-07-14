import { useEffect, useState } from "react";
import { useClient } from "../utils/contentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const { client } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    const res: any = await client.getEntries({ content_type: "whyChooseUs" });
    setData(res.items);
  }

  return (
    <div className="h-[90vh] flex align items-center justify-center flex-col">
      <h2 className="text-4xl font-bold">Why Choose Us?</h2>
      <p className="text-center my-6">
        We have decades of experience, having successfully recruited across the{" "}
        <br /> globle for many years.
      </p>
      <div className="grid grid-cols-3 align items-center justify-items-center w-[80%]">
        {data.map((item: any) => {
          return (
            <div key={item.sys.id} className="my-4 flex justify-center">
              <FontAwesomeIcon
                className="text-orange-500 text-xl mr-4 mt-1"
                icon={faCheck}
              />
              <div className="w-[65%]">
                <h4 className="text-xl font-bold mb-4">{item.fields.title}</h4>
                <p>{item.fields.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
