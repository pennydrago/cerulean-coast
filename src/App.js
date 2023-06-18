import './App.css';
import React from 'react';
// install react router dom and import Route and Switch
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Include switch component */}
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
