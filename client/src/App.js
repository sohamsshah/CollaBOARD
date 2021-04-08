import './App.css';
import Playground from "./components/Playground/Playground"
import Join from "./components/Join/Join"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Join/>
        </Route>
        <Route path="/playground">
          <Playground />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
