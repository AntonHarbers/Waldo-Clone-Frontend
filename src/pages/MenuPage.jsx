import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function MenuPage() {
  return (
    <div className=" flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      <Link to={'/game'}>Game 1</Link>
    </div>
  );
}
