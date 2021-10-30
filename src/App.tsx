import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import './App.scss';
import { Defenders } from "./pages/Defenders/Defenders";
import { Frontpage } from './pages/frontpage/Frontpage';


function App() {
  return (
    <div className={ "App App-" + global.app_config.CSS_ID}>
      <HashRouter>
        <Switch>
          <Route path="*/defenders"><Defenders/></Route>
          <Route path="/"><Frontpage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
