import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { LandingPage } from "./components/LandingPage"
import { Car2GoContainer } from "./components/Car2Go"
import { MyTaxiContainer } from "./components/MyTaxi"
import { NavBar } from './components/NavBar';

function App() {

  const Layout = ({ children }) => (
    <div>
      <NavBar />
      {children}
    </div>
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Layout>
          <Route path="/car2go" component={Car2GoContainer} />
          <Route path="/mytaxi" component={MyTaxiContainer} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
