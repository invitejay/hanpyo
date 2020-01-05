import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import Timetable from './page/Timetable';
import Review from './page/Review';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Route exact path="/" component={Timetable} />
          <Route path="/review" component={Review} />
        </main>
      </Router>
    </div>
  );
}

export default App;
