// import { container, title } from "assets/jss/material-kit-react.js";
// import { container, title } from "@material-ui/core";

const iconsStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    // ...container
  },
  title: {
    // ...title,
    display: "inline-block",
    position: "relative",
    color: "#888888",
    fontFamily: "'Orbitron', sans-serif",
    textDecoration: "none",
    textShadow: "none",
    backgroundColor: "#fc0",
    maxWidth: "470px",
    width: "100%",
    lineHeight: "1.25rem",
    fontSize: "1.25rem",
    margin: "1.75rem 0 0.5rem",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    backgroundColor: "#c00",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },


  // parallax
  wrapper: {
    /* The height needs to be set to a fixed value for the effect to work.
     * 100vh is the full height of the viewport. */
    height: "100vh",
    /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
    overflowX: "hidden",
    /* Enable scrolling on the page. */
    overflowY: "auto",
    /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
    perspective: "2px",
  },
  
  section: {
    /* Needed for children to be absolutely positioned relative to the parent. */
    position: "relative",
    /* The height of the container. Must be set, but it doesn't really matter what the value is. */
    height: "auto",
    minHeight: "40vh",
    width: '100%',
    padding: "1rem 0",

    /* For text formatting. */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  sectionIcons: {
    maxWidth: 470,
  },

  icons: {
      display: 'inline-flex',
      width: 50,
      height: 50,
      margin: 2.5,
      boxShadow:
      "0 8px 12px 2px rgba(0, 0, 0, 0.14), 0 3px 15px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },

  parallax: {
    "&:after": {
    /* Display and position the pseudo-element */
    content: " ",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
  
    /* Move the pseudo-element back away from the camera,
     * then scale it back up to fill the viewport.
     * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
    transform: "translateZ(-1px) scale(1.5)",
    /* Force the background image to fill the whole element. */
    backgroundSize: "100%",
    /* Keep the image from overlapping sibling elements. */
    zIndex: "-1",
    }
  },

  justifyCenter: {
    justifyContent: "center !important",
    textAlign: "center",
    display: "flex",
  },

  // modal style
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(98, 98, 98)',
    padding: '1rem',
    margin: 'auto 2.5%',
    width: 450,
    maxWidth: 450,
  },
  header: {
    fontSize: '0.8rem',
    paddingTop: 10,
    fontWeight: 400,
    color: 'rgb(3, 148, 148)',
  },
  text: {
    fontSize: '0.75rem',
    lineHeight: '1.1rem',
    color: '#333',
  },
  textEm: {
    fontSize: '0.5rem',
    lineHeight: '0.5rem',
    color: 'rgb(204, 204, 204)',
    marginTop: 5,
  },
  button: {
      margin: 0,
      padding: 0,
      width: 'auto',
      height: 'auto',
      cursor: 'pointer',
      display: 'contents',
  },
  img: {
        margin: 0,
        padding: 0,
        width: 50,
        height: 50,
        border: '1px solid rgb(98, 98, 98)',
    },
}

export default iconsStyle;
