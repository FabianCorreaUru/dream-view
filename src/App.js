import './App.css';

import {Routes, Route, useLocation } from 'react-router-dom'
import Carousel from './components/carousel/carousel'
import Billboard from './components/billboard/billboard'
import Ticket from './components/ticket/ticket'

function App() {

  const {pathname} = useLocation()

  return (
    <div className="App">    
      <div className="App-header">         
        <div className="main-menu">
            <div className="menu-logo"> 
              <img src={process.env.PUBLIC_URL + '/logo/DreamView.png'} className="logo" alt="logo"/> 
            </div>
            <div className="menu-space"> </div>
            <div className={"menu-item " + (pathname==='/' ? "active" : "")}><a href="/">Destacadas</a></div>
            <div className={"menu-item " + (pathname==='/billboard' ? "active" : "")}><a href="/billboard">Cartelera</a></div>
            <div className="menu-item btn-buy-ticket"> <a href="/ticket"> Comprar Ticket </a> </div>
            <div className="menu-collapse"> <a href="/ticket"> <img src={process.env.PUBLIC_URL + '/icons/ticket.png'} alt="ticket"/> </a> </div>
        </div>
      </div>
      <Routes>       
        <Route path='/' element={<Carousel/>} exact></Route>
        <Route path='/billboard' element={<Billboard/>} exact></Route>
        <Route path='/ticket' element={<Ticket/>}></Route>
        <Route path='/ticket/:movie' element={<Ticket/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
