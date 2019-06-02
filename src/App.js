import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import JodohDetail from './components/pages/JodohDetail';
import Login from './components/auth/Login';
import Daftar from './components/auth/Daftar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="tresnan-header">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/profile/:id' component={JodohDetail}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/daftar' component={Daftar}/>
          </Switch>
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
