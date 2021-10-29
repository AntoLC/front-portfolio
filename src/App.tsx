import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.scss';
import { Defenders } from "./pages/Defenders/Defenders";
import { Frontpage } from './pages/frontpage/Frontpage';


function App() {
  return (
    <div className={ "App App-" + global.app_config.CSS_ID}>
      <Router>
        <Switch>
          <Route path="/defenders"><Defenders/></Route>
          <Route path="/"><Frontpage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
