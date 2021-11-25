import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CreateGame from './components/CreateGame';
import GameCatalog from './components/GameCatalog/GameCatalog';
import ErrorPage from './components/ErrorPage';

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
  };

  const navChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header navChangeHandler={navChangeHandler} />

      <main id="main-content">{routes[page] || <ErrorPage />}</main>
    </div>
  );
}

export default App;
