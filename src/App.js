import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import AddBookPage from './pages/add-book-page/add-book-page.component';
import HomePage from './pages/home-page/home-page.component';
import LoginForm from './components/login-form/login-form.component';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar loggedIn={loggedIn} />
        <Switch>
          <Route exact path={['/', 'home']} component={HomePage}></Route>
          <Route exact path="/addBook" component={AddBookPage}></Route>
          <Route exact path="/login" component={() => <LoginForm submitFunction={setLoggedIn} />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
