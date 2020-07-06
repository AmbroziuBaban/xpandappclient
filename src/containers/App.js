import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Layout from "../components/Layout/layout";
import Home from "../components/Home/Home"
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from "../components/ErrorPages/NotFound/NotFound"
import PlanetList from './Planet/PlanetList/PlanetList'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/planets" component={PlanetList} />
          
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}
export default App;

