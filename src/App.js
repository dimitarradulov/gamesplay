import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CreateGame from './components/CreateGame';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import Register from './components/Register';
import GameDetails from './components/GameDetails';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/games" exact component={GameCatalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/games/:gameId" component={GameDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
