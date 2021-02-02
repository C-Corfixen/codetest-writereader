import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({submitFunction}) => {
  const history = useHistory();
  const handleSubmit = (e) => {
    submitFunction(true);
    history.push('/');
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;