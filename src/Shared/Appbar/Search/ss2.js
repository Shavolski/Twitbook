import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { fetchPostData, fetchUserData } from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./SearchStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, tabValue, indexTab, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== indexTab}
      id={`simple-tabpanel-${indexTab}`}
      aria-labelledby={`simple-tab-${indexTab}`}
      {...other}
    >
      {tabValue === indexTab && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  indexTab: PropTypes.any.isRequired,
  tabValue: PropTypes.any.isRequired,
};

function a11yProps(indexTab) {
  return {
    id: `simple-tab-${indexTab}`,
    "aria-controls": `simple-tabpanel-${indexTab}`,
  };
}

const Search = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tabValue, setTabValue] = React.useState(0);

  const tabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      let users = await fetchUserData();
      let posts = await fetchPostData();

      setUserData(users.data);
      setPostData(posts.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Box
        textAlign="center"
        className={classes.borderSearch}
        borderRadius={16}
      >
        <Autocomplete
          id="combo-box-demo"
          options={userData}
          getOptionLabel={(option) => `${option.username}`}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for people"
              variant="outlined"
            />
          )}
          renderOption={(option) => {
            return <h4>{`${option.username}`}</h4>;
          }}
        />
      </Box>
    </div>
  );
};

Search.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
};

export default Search;
