import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Paper from '@material-ui/core/Paper'

import Avatar from '@material-ui/core/Avatar'
import BioImgOne from './../../assets/img/bio/bio-1.jpg'
import BioImgTwo from './../../assets/img/bio/bio-2.jpg'
import BioImgThree from './../../assets/img/bio/bio-3.jpg'
import BioImgFour from './../../assets/img/bio/bio-4.jpg'
import BioImgFive from './../../assets/img/bio/bio-5.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: 40,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        display: 'flex',
        lineHeight: '40px',
    },
    name: {
        paddingLeft: 20,
    },
    photo: {
        flexWrap: 'wrap',
        display: 'inline-flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(24),
            height: theme.spacing(24),
        },
    }
}));

// Biography Props:
const afunjaBioProps = {
    ALipede: {
        alt: "Afolabi Lipede",
        src: BioImgOne,
        name: "Afolabi Lipede",
        bio: "Afolabi Lipede | Flame is the music producer, bass guitarist, singer and song writer. Innovative and unique style engages bass harmonics in complex chord structures with an underlying bass rift. From this style has evolved an original music: Afunja, meaning African FUNk and JAzz. solid and mesmerizing. This music evokes a feeling of colourful world culture. You can hear this unique style on 'Irony of Peace'. Flame and Mark Christopher are currently working on new songs towards Afunja Music debut release.",
        numKey: 1,
    },
    MChristopher: {
        alt: "Mark Christopher",
        src: BioImgTwo,
        name: "Mark Christopher",
        bio: "xxx",
        numKey: 2,
    },
    BIdowu: {
        alt: "Biola Idowu",
        src: BioImgThree,
        name: "Biola Idowu",
        bio: "xxx",
        numKey: 3,
    },
    YAdesina: {
        alt: "Yinka Adesina",
        src: BioImgFour,
        name: "Yinka Adesina",
        bio: "xxx",
        numKey: 4,
    },
    JMbarani: {
        alt: "Judy Mbarani",
        src: BioImgFive,
        name: "Judy Mbarani",
        bio: "xxx",
        numKey: 5,
    },
};

function AboutAfunja(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {Object.keys(afunjaBioProps).map(key => (
            <Accordion key={afunjaBioProps[key].numKey}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                ><Avatar src={afunjaBioProps[key].src} alt={afunjaBioProps[key].alt} />
                    <Typography className={classes.heading}><span className={classes.name}>{afunjaBioProps[key].name}</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Paper elevation={3} className={classes.photo}>
                        <img src={afunjaBioProps[key].src}  alt={afunjaBioProps[key].alt} />
                    </Paper>
                    <Typography variant="body2" color="textSecondary" component="p">
                    <strong>{afunjaBioProps[key].name}</strong>
                    {afunjaBioProps[key].bio}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </div>
    );
}
export default AboutAfunja;

