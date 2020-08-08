import React from "react";
import { Switch, Route } from "react-router";

import Tugas11 from '../tugas11/HargaBuah';
import Tugas12 from '../tugas12/Timer';
import Tugas13 from '../tugas13/List';
import Tugas14 from '../tugas14/HargaBuah';
import Fruit from './HargaBuah';


const Routes = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Fruit />
        </Route>
        <Route path="/tugas11">
          <Tugas11 />
        </Route>
        <Route exact path="/tugas12">
          <Tugas12 />
        </Route>
        <Route exact path="/tugas13">
          <Tugas13 />
        </Route>
        <Route exact path="/tugas14">
          <Tugas14 />
        </Route>
        <Route exact path="/tugas15">
          <Fruit />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
