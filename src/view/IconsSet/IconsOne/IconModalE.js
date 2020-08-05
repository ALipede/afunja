import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './../../../assets/js/iconsStyle';

// icon image.gif
import image from "./img/icon-5.gif";
const useStyles = makeStyles(styles);

function createData(iconNum, iconHeader, iconText, iconAuthor) {
    return { iconNum, iconHeader, iconText, iconAuthor };
}

const iconsInputs = [
    createData(
        5,
        "Eternal Infinity | Infinite Eternity",
        "There are things we see through and things we don’t. We see through ourselves the Fear of Death but fail to see through ourselves the Love of Life. Yet in Truth we do not see through the Emptiness of Death but through the Fullness of Life. Even though we cannot see through the Fullness of that which we can, without seeing through the Emptiness of that which we cannot. The Fullness of Eternal Life Glows within the Reflection of Infinity’s Emptiness. Eternity is that which We Are and Infinity is that which without, We Are Not; such that, we are Not just what We Are, we are also that which We Are Not.",
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
