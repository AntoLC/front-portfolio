import React from 'react';
import './App.scss';
import { Frontpage } from './pages/frontpage/Frontpage';


function App() {
  return (
    <div className={ "App App-" + global.app_config.CSS_ID}>
      <Frontpage/>
    </div>
  );
}

export default App;
