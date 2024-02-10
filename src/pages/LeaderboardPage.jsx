import { useLocation } from 'react-router-dom';

export default function LeaderboardPage() {
  const level = useLocation().pathname.slice(5)[1];

  return <div>LeaderboardPage {level}</div>;
}
