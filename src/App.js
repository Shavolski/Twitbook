import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Users from './components/Users';
import FullPost from './components/FullPost';
import Error from './components/Error';
import '@fontsource/roboto';



function App() {

  const [allData, setAllData] = useState([]); //State for user data
  const [ postData, setPostData ] = useState([]); //State for post data

  const fetchUserData = async () => {
    return await axios.get("http://jsonplaceholder.typicode.com/users");//user endpoint
  };

  const fetchPostData = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");//post endpoint
  };

  //This grabs the user endpoint and spits out the data.
  useEffect(() => {

    fetchUserData().then(response => {
      console.log(response.data)
      setAllData(response.data)
    })
    .catch(error => {
      console.log('The was an error grabbing the user data:' + error);
    })

  }, []);

//This grabs the post endpoint and spits out the data.
  useEffect(() => {

    fetchPostData().then(response => {
      console.log(response.data)
      setPostData(response.data)
    })
    .catch(error => {
      console.log('The was an error grabbing the post data:' + error);
    })

  }, []);

    return (
      <main>
          <Switch>
            <Route exact path="/"><Home allData={allData} postData={postData}/></Route>
            <Route path="/users/:username" exact component={Users}></Route>
            <Route path="/post/:title" exact> <FullPost allData={allData} postData={postData}/></Route>
            <Route component={Error} />
          </Switch>
      </main>
    );
}

export default App
