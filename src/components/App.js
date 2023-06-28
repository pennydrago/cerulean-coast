import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import Food from './Food';
import Bookings from './Bookings';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main className="main-content">
        <Switch>
          <Route exact path="/food">
            <Food />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>    
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h2>404 not found</h2>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}