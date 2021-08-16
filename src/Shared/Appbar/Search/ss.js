import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
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

const Search = ({ userData, postData }) => {
  const classes = useStyles();

  const [filteredUserData, setFilteredUserData] = useState(userData);
  const [filteredPostData, setFilteredPostData] = useState(postData);
  const [showMenu, setshowMenu] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [postValue, setPostValue] = useState("");
  const [tabValue, setTabValue] = React.useState(0);

  const tabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  const handleSearch = (event) => {
    if (!showMenu) {
      setshowMenu(true);
    }

    const userValue = event.target.value;
    setUserValue(userValue);

    const userResult = userData.filter((udata) => {
      return udata.username.search(userValue.toLowerCase()) !== -1;
    });
    setFilteredUserData(userResult);

    const postValue = event.target.value;
    setPostValue(postValue);

    const postResult = postData.filter((pdata) => {
      return pdata.title.search(postValue.toLowerCase()) !== -1;
    });
    setFilteredPostData(postResult);
  };

  return (
    <div>
      <Box
        textAlign="center"
        className={classes.borderSearch}
        borderRadius={16}
      >
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            placeholder="Search for username"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "Search for username" }}
            onChange={handleSearch}
            value={userValue}
            value={postValue}
            onBlur={() => setshowMenu(false)}
          />
        </div>
      </Box>

      {showMenu && (
        <Box borderRadius={16}>
          <Tabs
            value={tabValue}
            onChange={tabChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              label="People"
              {...a11yProps(0)}
              style={{ textTransform: "none" }}
            />
            <Tab
              label="Title"
              {...a11yProps(1)}
              style={{ textTransform: "none" }}
            />
          </Tabs>
          <List
            className={classes.root}
            component="nav"
            aria-label="list of usernames"
          >
            <TabPanel tabValue={tabValue} indexTab={0}>
              {filteredUserData.map((userValue, userIndex) => {
                return (
                  <ListItem
                    button
                    key={userValue.id}
                    className={classes.listItem}
                  >
                    <ListItemText>
                      <Link
                        to={{
                          pathname: `/users/${userValue.id}`,
                        }}
                        className={classes.listItemLink}
                      >
                        {"@" + userValue.username}
                      </Link>
                    </ListItemText>
                    <ListItemText className={classes.fullName} disabled>
                      <Typography variant="caption" gutterBottom>
                        {userValue.name}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </TabPanel>
            <TabPanel tabValue={tabValue} indexTab={1}>
              {filteredPostData.map((postValue, postIndex) => {
                return (
                  <ListItem
                    button
                    key={postValue.id}
                    className={classes.listItem}
                  >
                    <ListItemText>
                      <Link
                        to={{
                          pathname: `/post/${postValue.id}`,
                        }}
                        className={classes.listItemLink}
                      >
                        {postValue.title}
                      </Link>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </TabPanel>
            {/* Filters usernames to match what you typed in the inputbox */}
          </List>
        </Box>
      )}
    </div>
  );
};

Search.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
};

export default Search;
