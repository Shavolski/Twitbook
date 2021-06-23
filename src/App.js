import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Dashboard from "routes/Dashboard/Dashboard";
import UserDetails from "routes/UserDetails/UserDetails";
import PostDetails from "routes/PostDetails/PostDetails";
import Error from "shared/Error/Error";
import "@fontsource/roboto";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  const fetchUserData = async () => {
    return await axios.get("http://jsonplaceholder.typicode.com/users");
  };

  const fetchPostData = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  useEffect(() => {
    fetchUserData()
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("The was an error grabbing the user data:" + error);
      });
  }, []);

  useEffect(() => {
    fetchPostData()
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log("The was an error grabbing the post data:" + error);
      });
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Dashboard userData={userData} postData={postData} />
        </Route>
        <Route path="/users/:username" exact component={UserDetails}></Route>
        <Route path="/post/:title" exact>
          {" "}
          <PostDetails userData={userData} postData={postData} />
        </Route>
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default App;
