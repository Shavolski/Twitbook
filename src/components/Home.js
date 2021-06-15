import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import ListPost from '../subComponents/ListPost';


function Home(props) {

    return (
        <div style={{ background: '#F2F2F7', width:'100%'}}>
          <Navbar allData={props.allData}/>
          <Box>
            <Box>
              <ListPost allData={props.allData} postData={props.postData}/>
            </Box>
          </Box>
        </div>
    );
};
export default Home;
