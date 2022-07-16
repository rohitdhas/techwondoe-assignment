import Button from './button';

export default function GetInTouch() {
  return (
    <div className="h-[45vh] bg-[#E6692E] flex flex-col align items-center justify-center text-white">
      <h3 className="text-3xl font-semibold">Speak to a Career Expert</h3>
      <p className="my-6 text-center text-sm px-4 md:px-0">
        We have are dedicated to finding the best fit for you. Get in touch to organise a
        face-to-face <br /> cactch up with somone from our team
      </p>
      <Button label="Get in touch" type="secondary" />
    </div>
  );
}
