import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CreateGame from './components/CreateGame';
import GameCatalog from './components/GameCatalog/GameCatalog';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/games" component={GameCatalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
