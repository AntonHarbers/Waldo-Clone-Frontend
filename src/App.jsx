import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import LeaderBoardPage from './pages/LeaderboardPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <nav className="w-[100vw]">
        <ul className="flex w-[100vw] absolute justify-between p-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboards">Leaderboards</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/leaderboards" element={<LeaderBoardPage />} />
        <Route path="/" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
