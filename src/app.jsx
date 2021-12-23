import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Section from './components/section/section';


function App({authService}) {

  const [user, setUser] = useState({});
  // let loggedIn = false;

  // 파라미터값은 정상.
  const successLogin = (response) => {
    setUser(response.user.uid);
    // if (user.id) {
      // loggedIn = true;
    // }
  }

  // User초기화 해야 하므로 다시 setUser
  const successLogOut = () => {
    // loggedIn = false;
    setUser({});
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {<Home
            authService={authService}
            successLogin={successLogin}
          />}
        />
        <Route path="/section" element={<Section 
          authService={authService}
          successLogOut={successLogOut}
        />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
