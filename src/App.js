import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

//Route 에 전달할수있는 2가지 Props 1.URL을 위한 path props 2.component props
//Link, Router 컴포넌트는 반드시 HashRouter안에 포함되어있어야함!

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  ) 
}
export default App;
