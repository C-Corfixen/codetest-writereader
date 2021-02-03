import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../../api/auth.service';

import './login-form.styles.css';

const LoginForm = ({submitFunction}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({name, password}).then((response) => {
      console.log(response);
      if(response.error) {
        setError(response.error)
      }
      else if(response.login === 'ok') {
        submitFunction(true);
        history.push('/');
      }
    });
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        { error && <p>{ error }</p>}

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;