// import { container, title } from "assets/jss/material-kit-react.js";

const iconStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    // ...container
  },
  title: {
    // ...title,
    display: "block",
    position: "relative",
    color: "#666",
    fontFamily: "'Orbitron', sans-serif",
    textDecoration: "none",
    textShadow: "none",
    lineHeight: "1.25rem",
    fontSize: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0.25rem",
    marginBottom: "0.5rem",
    maxWidth: "440px",
    width: "100%",
  },
  sectionIcons: {
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "left",
    textAlign: "left",
    display: "inherit",
  },
  section: {
    /* Needed for children to be absolutely positioned relative to the parent. */
    position: "relative",
    /* The height of the container. Must be set, but it doesn't really matter what the value is. */
    height: "auto",
    width: '100%',
    padding: 10,
    backgroundImage: "linear-gradient( to right, rgba( 0, 0, 0, 0.1 ) 1px, transparent 1px ),linear-gradient( to bottom, rgba( 0, 0, 0, 0.1 ) 1px, transparent 1px )",
    backgroundColor: "#eeeeee",
    backgroundSize: "10px 10px",
    border: "1px solid #0000",
    /* For text formatting. */
    display: "block",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    "& .table": {
        width: "auto",
        marginBottom: 0,
        backgroundColor: "none",
    },
    "& .table td": {
        width: 50,
        height: 50,
        padding: 0,
    }
  },

  // responsive table margin
  tableMargin: {
    marginLeft: "auto",
    marginRight: "auto",
  }
}

export default iconStyle;