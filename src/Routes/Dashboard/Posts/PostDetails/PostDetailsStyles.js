import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: 850,
    margin: "72px 148px 72px 148px",
  },
  postDetailBC: {
    backgroundColor: "#F2F2F7",
    height: "120vh",
  },
  titleName: {
    fontSize: "48px",
    lineHeight: "56px",
    fontWeight: "400",
  },
  titleBody: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontStyle: "normal",
  },
}));
