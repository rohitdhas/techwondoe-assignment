import Line from "../assets/line1.svg";

export default function HeroSection() {
  const imgURL =
    "https://images.ctfassets.net/8eswx0dgamo3/1dvHDlPNVKqPNOL3LYfkOW/a727adcd3a707e7a8a2bfbdfc9dcd591/1Z2niiBPg5A.png";

  return (
    <div className="mt-[4.8rem] h-[90vh] relative">
      <img src={imgURL} alt="hero" className="h-full absolute -z-10" />
      <img src={Line} alt="line" className="absolute right-0 h-[100%] -z-10" />
    </div>
  );
}
