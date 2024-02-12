# Wheres Waldo Knockoff Frontend - The Odin Project 📚

The Waldo Clone Frontend brings the nostalgic "Where's Waldo?" game into the digital era. Built with the modern React framework, this web application offers players a dynamic and interactive experience as they scour different levels trying to find certain fun characters. TailwindCSS ensures a sleek, responsive design, while Vite speeds up development with its hot module replacement. Dive into various game levels, challenge yourself against the clock, and see how you rank on the leaderboards!

[Live Link](https://main--odinwaldoclone.netlify.app/)

[API Repo](https://github.com/AntonHarbers/odin-waldo-api)

[API Endpoint](https://lowly-famous-silica.glitch.me/)

## Getting Started 🚀

Ready to dive into the game?

- **Clone the project** to your local machine:

```bash
git clone https://github.com/AntonHarbers/Waldo-Clone-Frontend.git
```

- **Enter the project directory** and install its dependencies:

```bash
cd Waldo-Clone-Frontend
npm install
```

- **Fire up the development server** and start exploring:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to see the app in action!

## Key Concepts 💡

### Component Architecture

The heart of this project lies in its React components, each serving a unique part of the app's functionality. From the main game interface to leaderboards, every piece is modular and reusable, making the codebase clean and maintainable.

**Example from `App.jsx`:**

```jsx
function App() {
  return (
    <Router>
      <nav>...</nav>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/level1" element={<GamePage />} />
        ...
      </Routes>
    </Router>
  );
}
```

### React Router

Navigating through the game's levels and menus is seamless, thanks to React Router. It enables the application to maintain a single-page app feel, with URL changes reflecting different game states without reloading the page.

**Navigation Example (`App.jsx`):**

```jsx
<Routes>
  <Route path="/leaderboards" element={<LeaderboardMenu />} />
  <Route path="/level1leaderboard" element={<LeaderboardPage />} />
  ...
</Routes>
```

### TailwindCSS for Styling

Styling with TailwindCSS is a breeze 🌬️. It allows for rapid UI development, making it possible to apply responsive design and beautiful aesthetics with minimal effort.

**Styling Example (`CharacterSelect.jsx`):**

```jsx
<div className=" select-none relative h-[50px] w-[50px] border-4 border-red-500">
  ...
</div>
```

## API Endpoints Overview 🌍

The frontend interacts with the [Waldo API](https://github.com/AntonHarbers/odin-waldo-api), a separate entity that manages game logic and data. Key interactions include fetching character locations, submitting game times for leaderboard ranking, and retrieving leaderboard data. Ensure the API is up and reachable to get the full gaming experience.

- **Fetching characters:** `/characters`
- **Posting game scores:** `/games/:id/time`
- **Fetching leaderboard data:** `/games/:level`

(Refer to the backend documentation for more details on the API endpoints.)

## Final Notes 📝

Building the Waldo Clone Frontend was not just about coding; it was a journey through effective web development practices. React's component-based architecture taught me the importance of breaking down the app into manageable pieces, while TailwindCSS showed me the power of utility-first CSS in creating responsive designs. Most importantly, this project underscored the significance of user experience in game development, focusing on how interactive elements and performance impact overall enjoyment.

## Contribution Note 🚫

As a portfolio project, I'm currently not accepting contributions. However, I encourage you to clone and explore the code for educational purposes. Dive in, experiment with it, and maybe even create your own version of the game. Let's keep the spirit of learning and exploration alive!
