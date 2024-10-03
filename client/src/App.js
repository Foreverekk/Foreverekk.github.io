import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
