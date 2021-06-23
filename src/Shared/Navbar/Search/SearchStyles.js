import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 328,
    backgroundColor: "white",
    position: "absolute",
  },
  listItem: {
    display: "block",
  },
  listItemLink: {
    textDecoration: "none",
    color: "black",
  },
  fullName: {
    color: "#656565",
    fontSize: "12px",
    lineHeight: "16px",
    marginTop: "-5px",
    marginBottom: "5px",
  },
  borderSearch: {
    borderStyle: "solid",
    borderWidth: "2px",
    "&:hover": {
      borderColor: fade(theme.palette.common.black, 0.25),
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    color: "#656565",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
