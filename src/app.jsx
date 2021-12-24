import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Section from './components/section/section';
import './app.css';

function App({authService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home authService={authService} />
        }/>
        <Route path="/section" element={
          <Section authService={authService} />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
