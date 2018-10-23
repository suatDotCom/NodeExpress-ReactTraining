import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Arwes from "./pages/Arwes";
import DocumentTitle from "react-document-title";
import { Grid } from "react-bootstrap";
import "./assets/css/main.css";
import SocketConnection from "./components/SocketConnection/SocketConnection.jsx";

const shineEffect = {
  zIndex: 9999,
  pointerEvents: "none"
};

const App = () => (
  <DocumentTitle title="Infoline DeepLearning Project">
    <Grid>
      <SocketConnection />

      <Router>
        <div>
          <i style={shineEffect} />

          <Switch>
            <Route exact path="/" component={Arwes} />
            <Route path="/Home" component={Home} />
            <Route path="/Arwes" component={Arwes} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Grid>
  </DocumentTitle>
);

export default App;
