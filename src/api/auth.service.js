const correctLogin = {
  "name": "codetest",
  "password": "codetest123"
};

const login = ({name, password}) => {
  return new Promise((resolve) => {
    if(correctLogin.name !== name) {
      resolve({"error": "Incorrect name"});
    }
    else if(correctLogin.password !== password) {
      resolve({"error": "Incorrect password"});
    }
    else {
      resolve({"login": "ok"});
    }
  });
}

const logout = () => {
  console.log('You have logged out');
}

export {
  login,
  logout
}