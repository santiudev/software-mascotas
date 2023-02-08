import './App.css';
import Nav from "./componentes/nav/nav.jsx"

import Home from "./contenedores/home.jsx"
import NotFound from "./componentes/notFound/notFound.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routas de la app
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
