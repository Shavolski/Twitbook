import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarBC: {
    background: "white",
  },
  titleName: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
  },

  toolBar: {
    flexGrow: 1,
    padding: "0px",
  },
}));
