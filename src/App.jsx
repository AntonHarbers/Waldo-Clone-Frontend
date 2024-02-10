import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import MenuPage from './pages/MenuPage';
import LeaderboardMenu from './pages/LeaderboardMenu';
import LeaderboardPage from './pages/LeaderboardPage';

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
        {/* Menu Routes */}
        <Route path="/leaderboards" element={<LeaderboardMenu />} />
        <Route path="/" element={<MenuPage />} />
        {/* Level Routes */}
        <Route path="/level1" element={<GamePage />} />
        <Route path="/level2" element={<GamePage />} />
        <Route path="/level2" element={<GamePage />} />
        {/* Leaderboard routes */}
        <Route path="/level1leaderboard" element={<LeaderboardPage />} />
        <Route path="/level2leaderboard" element={<LeaderboardPage />} />
        <Route path="/level3leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
