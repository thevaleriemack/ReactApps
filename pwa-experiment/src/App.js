//** thevaleriemack **//
// https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd

import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import ScatterPlot from './components/scatterPlot';
import logo from './logo.png';
import './App.css';

const Page = ({ title }) => (
  <div>
    <ul class="inline">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
    </div>
  </div>
)

const Home = (props) => (
  <div>
    <Page title="Home"/>
    <div className="App">
      <ScatterPlot
      height={200}
      width={400}
      dataPoints={12}
      />
    </div>
  </div>
)

const About = (props) => (
  <div>
    <Page title="About"/>
    <div className="App">
      <p>Here we are, in the summer of 2017.</p>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/about" component={About}/>
      </Router>
    );
  }
}

export default App;
