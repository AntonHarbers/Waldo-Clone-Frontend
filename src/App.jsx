import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import MenuPage from './pages/MenuPage';
import LeaderboardMenu from './pages/LeaderboardMenu';
import LeaderboardPage from './pages/LeaderboardPage';
import { useState } from 'react';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  return (
    <Router>
      <nav>
        <ul className="flex w-full absolute justify-between p-10">
          <li
            className={`select-none  text-2xl font-bold active:scale-90 hover:scale-125 transition-all duration-75 ease-in-out ${
              currentRoute == 'home' ? 'text-slate-100' : 'text-slate-400'
            }`}
          >
            <Link onClick={() => setCurrentRoute('home')} to="/">
              Home
            </Link>
          </li>
          <li
            className={`select-none text-slate-200 text-2xl font-bold active:scale-90 hover:scale-125 transition-all duration-75 ease-in-out ${
              currentRoute == 'leaderboards'
                ? 'text-slate-100'
                : 'text-slate-400'
            }`}
          >
            <Link
              onClick={() => setCurrentRoute('leaderboards')}
              to="/leaderboards"
            >
              Leaderboards
            </Link>
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
