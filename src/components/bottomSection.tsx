import Line from "../assets/line3.svg";

export default function BottomSection() {
  const bagIcon =
    "https://images.ctfassets.net/8eswx0dgamo3/62mq1RLQPoW4EQ2kS2p16y/1ec13128690588ee7146bc83cf16ea15/Group_20.png";
  const candidateIcon =
    "https://images.ctfassets.net/8eswx0dgamo3/5kA4X0KTAKpX6eWVWZfvDY/e84ca15f994bf4c0cbf9ccb581798938/Group_19.png";
  return (
    <div className="h-[80vh] bg-[#EDEDED] flex justify-center align items-center relative">
      <img
        src={Line}
        alt="line"
        className="absolute right-0 top-[30%] w-[55%]"
      />
      <div className="z-10 bg-white w-[28%] h-[380px] px-6 py-8 rounded-sm mr-6 flex flex-col justify-between">
        <div>
          <img src={candidateIcon} alt="candidate icon" className="w-[80px]" />
          <h4 className="text-2xl font-bold my-4">Candidates</h4>
          <p>
            We are dedicated to matching highly skilled <br /> professionals to
            the right business, with the <br /> right team. Lorem ipsum dolor
            sit amet, <br /> consectetur adipiscing elit. Enim vulputate <br />{" "}
            aliquam arcu.
          </p>
        </div>
        <p className="text-orange-500 font-bold hover:underline cursor-pointer">
          Learn more
        </p>
      </div>
      <div className="z-10 bg-white w-[28%] h-[380px] px-6 py-8 rounded-sm flex flex-col justify-between">
        <div>
          <img src={bagIcon} alt="bag icon" className="w-[80px]" />
          <h4 className="text-2xl font-bold my-4">Employers</h4>
          <p>
            We exist because businesses want to hire <br /> the best people..
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Enim
            vulputate <br /> aliquam arcu .
          </p>
        </div>
        <p className="text-orange-500 font-bold hover:underline cursor-pointer">
          Learn more
        </p>
      </div>
    </div>
  );
}
