import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import AddBookPage from './pages/add-book-page/add-book-page.component';
import HomePage from './pages/home-page/home-page.component';
import LoginForm from './components/login-form/login-form.component';
import EditBookPage from './pages/edit-book-page/edit-book-page.component';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar loggedIn={loggedIn} logout={setLoggedIn} />
        <Switch>
          <Route exact path="/" component={() => <HomePage loggedIn={loggedIn} />}></Route>
          <Route exact path="/addBook" component={AddBookPage}></Route>
          <Route exact path="/editBook/:id" component={EditBookPage}></Route>
          <Route exact path="/login" component={() => <LoginForm submitFunction={setLoggedIn} />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
