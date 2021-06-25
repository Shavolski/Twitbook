import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Dashboard from "routes/Dashboard/Dashboard";
import UserDetails from "routes/UserDetails/UserDetails";
import PostDetails from "routes/PostDetails/PostDetails";
import Error from "shared/Error/Error";
import "@fontsource/roboto";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/users/:username" exact component={UserDetails}></Route>
        <Route path="/post/:title" exact>
          {" "}
          <PostDetails />
        </Route>
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default App;
