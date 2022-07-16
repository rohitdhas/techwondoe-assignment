import Line from '../assets/line2.svg';

export default function Team() {
  const imgURL =
    'https://images.ctfassets.net/8eswx0dgamo3/1su5M0pZpEczPj5T83VdFQ/9f53aa6d7e01151786c0a3d0aee7437f/dylan-gillis-533818-unsplash.png';

  return (
    <div className="h-auto py-5 px-4 md:py-0 md:h-[70vh] bg-[#FAE1D5] bg-opacity-[0.4] md:flex-row flex-col flex justify-center align items-center relative">
      <img src={imgURL} alt="team" className="h-[300px] mr-[5%]" />
      <img src={Line} alt="line" className="hidden md:block absolute left-0 top-[-5rem] h-[95%]" />
      <div>
        <p className="font-bold text-[#E6692E] my-2 md:my-0">Our Team</p>
        <h2 className="text-3xl font-bold my-4">A team you can trust</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim <br />
          vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit <br />
          amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem <br />
          ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate <br />
          aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Enim vulputate aliquam arcu.
        </p>
        <button className="px-4 py-2 bg-[#E6692E] hover:bg-orange-600 text-white rounded-sm">
          Learn more
        </button>
      </div>
    </div>
  );
}
