import { Link } from 'react-router-dom';
import FirstImage from '/gameOne/space.webp';
import SecondImage from '/gameTwo/prison.webp';
import ThirdImage from '/gameThree/bball.webp';

export default function MenuPage() {
  return (
    <div className=" select-none flex flex-col gap-4 bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      <h1 className="text-3xl md:text-6xl">Select Level</h1>
      <div className="flex items-center justify-center gap-4 w-full h-auto">
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-52 h-auto rounded-sm"
            src={FirstImage}
            alt="First Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level1'}
          >
            Level 1
          </Link>
        </div>
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-52 h-auto rounded-sm"
            src={SecondImage}
            alt="Second Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level2'}
          >
            Level 2
          </Link>
        </div>
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-52 h-auto rounded-sm"
            src={ThirdImage}
            alt="Third Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level3'}
          >
            Level 3
          </Link>
        </div>
      </div>
    </div>
  );
}
