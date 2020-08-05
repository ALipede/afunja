import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './../../../assets/js/iconsStyle';

// icon image.gif
import image from "./img/icon-51.gif";
const useStyles = makeStyles(styles);

function createData(iconNum, iconHeader, iconText, iconAuthor) {
    return { iconNum, iconHeader, iconText, iconAuthor };
}

const iconsInputs = [
    createData(
        23,
        "In God there is no evil",
        "A drop of poison in clean water will poison it and a drop of clean water in poison cannot cleanse it. Because God is an infinite sea of clean water. Our spirits are whatever we make of it, drops of clean love or drops of poisonous fear. as long as we remember that in God there is no evil but a place for madness in the minds of evil spirits.",
        "icons © A.Lipede"),
];

export default function IconModalA() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.icons}>


            <button type="button" onClick={handleOpen} className={classes.button}>
                <img src={image} className={classes.img} alt="icons" />
            </button>
            {iconsInputs.map(iconsInput => (
                <Modal
                key={iconsInput.iconNum}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <img src={image} className={classes.img} alt="icons" />
                            <h4 id={iconsInput.iconNum} className={classes.header}>{iconsInput.iconHeader}</h4>
                            <p id="transition-modal-description" className={classes.text}>{iconsInput.iconText}</p>
                            <em className={classes.textEm}>{iconsInput.iconAuthor}</em>
                        </div>
                    </Fade>
                </Modal>
            ))}
        </div>

    );
}
