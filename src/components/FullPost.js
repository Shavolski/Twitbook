import React, {useEffect, useRouteMatch} from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    height:'100%',
    width: '100%',
    maxWidth: 850,
    margin:'72px 148px 72px 148px'
  },
  titleName: {
    fontSize:'48px',
    lineHeight:'56px',
    fontWeight:'400',

  },
  titleBody: {
    fontWeight:'400',
    fontSize:'16px',
    lineHeight:'24px',
    letterSpacing:'0.5px',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  userNameButton: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#007AFF',
    marginBottom:'100px',
  },
});


function FullPost(props) {
  const classes = useStyles();
  const location = useLocation({});


  //const title = props.match.params.title;
  const { title, body } = location.state;
  //const match = useRouteMatch("/post/${postData.title}");

  console.log(location)
    return (
        <div style={{ backgroundColor:'#F2F2F7', height:'120vh' }}>
            <Navbar />
            <Container id='fullpost'>
              <Box className={classes.root}>

                <Typography variant="h3" gutterBottom className={classes.titleName} display="block">
                  {title}
                </Typography>

                <Button size="small" className={classes.userNameButton}>
                  {props.allData.filter(user => props.allData.id === props.postData.userId ).map(data =>
                      <Link
                      style={{textDecoration:'none', color:'#007AFF'}}
                      key={data.id}
                      >
                        {data.username}
                      </Link>
                  )}
                </Button>

                <Typography variant="body1" gutterBottom display="block" className={classes.titleBody}>
                  {body}{body}{body}
                  <br/>
                  <br/>
                  <br/>
                  {body}{body}{body}
                  {body}{body}{body}
                  <br/>
                  <br/>
                  {body}{body}{body}{body}
                </Typography>

              </Box>
            </Container>

        </div>
    );
};
export default FullPost;
