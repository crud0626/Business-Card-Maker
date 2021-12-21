import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './components/home/home';
import Section from './components/section/section';


function App() {
  const [user, setUser] = useState();
  const settingUser = (obj) => {
    setUser({obj});
    console.log(user);
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} settingUser={settingUser}/>
          <Route path="/section" element={<Section />} user={user}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
