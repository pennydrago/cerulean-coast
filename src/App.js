import './App.css';
import React from 'react';
// install react router dom and import Route and Switch
import Header from './Header';
import Home from './Home';
import Food from './Food';
import Bookings from './Bookings';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Include switch component */}
        <Home />
        <Food />
        <Bookings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
