import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './../../../assets/js/iconsStyle';

// icon image.gif
import image from "./img/icon-15.gif";
const useStyles = makeStyles(styles);

function createData(iconNum, iconHeader, iconText, iconAuthor) {
    return { iconNum, iconHeader, iconText, iconAuthor };
}

const iconsInputs = [
    createData(
        15,
        "My brothers' and sisters' prayer",
        "My brothers and sisters who are in heaven. Hallowed is your name our kingdom has come. May your good will be done here on earth as it is now done in heaven. Give each other his and her daily love, and for-give each other their transparencies. As you expect others to for-give you your transparency. Lead each other not into the temptation of death and deliver each other from the evil of fear. For NOW is our kingdom of heaven. NOW is our power to change our spiritual world, and NOW is our glory to live eternally. Forever and forever are women and forever and forever are men. Amen",
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
                <img src={image}  className={classes.img} alt="icons" />
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
                            <img src={image}  className={classes.img} alt="icons" />
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
