import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
