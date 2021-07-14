import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: "Gustavo" }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
