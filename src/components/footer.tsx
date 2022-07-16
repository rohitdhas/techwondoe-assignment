export default function Footer() {
  return (
    <div className="h-[35vh] bg-white flex flex-col align items-center justify-center">
      <div className="w-[70%] grid grid-cols-2 gap-2 md:flex md:flex-row justify-evenly text-sm my-auto">
        <div className="text-[#E6692E] text-xl self-end">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin mx-4"></i>
          <i className="bi bi-instagram"></i>
        </div>
        <div>
          <p className="hover:underline cursor-pointer">Home</p>
          <p className="my-2 hover:underline cursor-pointer">About</p>
          <p className="hover:underline cursor-pointer">Candidates</p>
        </div>
        <div>
          <p className="hover:underline cursor-pointer">Employers</p>
          <p className="my-2 hover:underline cursor-pointer">Latest News</p>
          <p className="hover:underline cursor-pointer">Contact</p>
        </div>
        <div>
          <p className="underline">+62 (0) 9 124 5470</p>
          <p className="mt-2 underline">careers@namespace.com</p>
        </div>
        <div>
          Level 3 <br />
          79 High Street <br />
          Melbourne CBD <br />
          1010
        </div>
      </div>
      <div className="p-4 bg-gray-300 text-center w-[100%]">Copyright © 2021 - Beyond Ltd.</div>
    </div>
  );
}
