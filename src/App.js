import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import TimeLine from "./Components/TimeLine";
import Sobre from "./Components/Sobre";
import NaoEncontrado from "./Components/NaoEncontrado";
import DetalhePost from "./Components/DetalhePost";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/post/:time" component={DetalhePost} />
            <Route path="/sobre" component={Sobre} />
            <Route exact path="/" component={TimeLine} />
            <Route exact path="*" component={NaoEncontrado} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
