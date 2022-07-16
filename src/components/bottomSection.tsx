import Line from '../assets/line3.svg';

export default function BottomSection() {
  const bagIcon =
    'https://images.ctfassets.net/8eswx0dgamo3/62mq1RLQPoW4EQ2kS2p16y/1ec13128690588ee7146bc83cf16ea15/Group_20.png';
  const candidateIcon =
    'https://images.ctfassets.net/8eswx0dgamo3/5kA4X0KTAKpX6eWVWZfvDY/e84ca15f994bf4c0cbf9ccb581798938/Group_19.png';
  return (
    <div className="h-auto py-6 md:py-0 md:h-[80vh] bg-[#EDEDED] flex flex-col md:flex-row justify-center align items-center relative">
      <img src={Line} alt="line" className="absolute hidden md:block right-0 top-[30%] w-[55%]" />
      <div className="my-4 md:z-10 bg-white w-[90%] md:w-[28%] h-auto md:h-[380px] px-6 py-8 rounded-sm md:mr-6 flex flex-col justify-between">
        <div>
          <img src={candidateIcon} alt="candidate icon" className="w-[80px]" />
          <h4 className="text-2xl font-bold my-4">Candidates</h4>
          <p>
            We are dedicated to matching highly skilled professionals to the right business, with
            the right team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate
            aliquam arcu.
          </p>
        </div>
        <p className="text-orange-500 font-bold hover:underline cursor-pointer">Learn more</p>
      </div>
      <div className="my-4 md:z-10 bg-white w-[90%] md:w-[28%] h-auto md:h-[380px] px-6 py-8 rounded-sm flex flex-col justify-between">
        <div>
          <img src={bagIcon} alt="bag icon" className="w-[80px]" />
          <h4 className="text-2xl font-bold my-4">Employers</h4>
          <p>
            We exist because businesses want to hire the best people.. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Enim vulputate aliquam arcu .
          </p>
        </div>
        <p className="text-orange-500 font-bold hover:underline cursor-pointer">Learn more</p>
      </div>
    </div>
  );
}
