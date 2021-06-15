import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

//Will be used to transfer data between components
import { DataProvider } from '../Context';
import App from '../App';
//import ListPost from './ListPost';


//This is for the menu list when searching for usernames
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 328,
    backgroundColor:'white',
    position:'absolute',
  },
  fullName: {
    color:'#656565',
    fontSize:'12px',
    lineHeight:'16px',
    marginTop:'-5px',
    marginBottom:'5px',
  },
  borderSearch: {
    borderStyle: 'solid',
    borderWidth: '2px',
    '&:hover': {
      borderColor: fade(theme.palette.common.black, 0.25),
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    color: '#656565',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//This let's the user search for usernames available.
function Search(props) {
  const classes = useStyles();


  // This will hold all the data retrieved and the second will copy the 2 states provided.
  //const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(props.allData);
  const [showMenu, setshowMenu] = useState(false);
  const [value, setValue] = useState('');

  //This event will filter usernames based on what you typed
  const handleSearch = (event) =>{

    if (!showMenu){
      setshowMenu(true);
    }
    const value = event.target.value;

    setValue(value);
    console.log(value);

    const result = props.allData.filter((data) => {
      return data.username.search(value.toLowerCase()) !== -1;
    });
    setFilteredData(result); //This will display the username data onto the menu
  }



    return (
        <div>
          <div>
            <Box textAlign='center' className={classes.borderSearch} borderRadius={16}>
              <div className={classes.search}>
                <SearchIcon className={classes.searchIcon}/>
                <InputBase
                  placeholder="Search for username"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'Search for username' }}
                  onChange={handleSearch}
                  value={value}
                  onBlur={() => setshowMenu(false)}
                />
              </div>
            </Box>

            { showMenu && (
            <Box borderRadius={16}>
              <List className={classes.root} component="nav" aria-label="secondary mailbox folders">
                {filteredData.map((value,index)=>{
                  return(
                    <ListItem button key={value.id} style={{display:'block'}}>
                      <ListItemText>
                        <Link to={{
                          pathname:`/users/${value.username}`,
                          state:{
                            name:value.name,
                            website:value.website,
                            email:value.email,
                            username:value.username,
                          },
                        }}
                        style={{textDecoration:'none', color:'black'}}>
                          {'@'+value.username}
                        </Link>
                       </ListItemText>
                      <ListItemText className={classes.fullName} disabled>
                        <Typography variant="caption" gutterBottom>
                          {value.name}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )
                })}
              </List>
            </Box>
            )}
          </div>
        </div>
    );
};
export default Search;
