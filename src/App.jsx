import './App.css';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from './views/Character/Character';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters/:characterId">
            <Character />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
