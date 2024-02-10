import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function MenuPage() {
  return (
    <div className=" flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      <Link to={'/level1'}>Level 1</Link>
      <Link to={'/level2'}>Level 2</Link>
      <Link to={'/level3'}>Level 3</Link>
    </div>
  );
}
