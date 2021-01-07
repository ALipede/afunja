import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import ShowMoreText from 'react-show-more-text'
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
        "& h5": {
            fontFamily: '"Orbitron", sans-serif;',
        },
    },
    readMore: {
        color: 'rgb(140 140 140)',
        fontFamily: '"Lato", sans-serif',
        fontSize: '0.9rem',
        lineHeight: '1.2rem',
        marginBottom: 20,
        flexWrap: 'wrap',
        width: '100%',
        "& a": {
            display: 'inline-flex',
            width: '100%',
        },
        "& span": {
            flexWrap: 'wrap',
            display: 'inline',
        },
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
    },
    box: {
        display: 'flex',
        width: '100%',
    },
}));

// Biography Props:
const afunjaBioProps = {
    ALipede: {
        alt: "Afolabi Lipede",
        src: BioImgOne,
        name: "Afolabi Lipede - Flame",
        bio: "Flame is the Lead Singer, Bass Guitarist, Producer and Song Writer for Afunja. Innovative and unique style engages bass harmonics in complex chord structures with an underlying bass riff. From this style has evolved an original music: Afunja, meaning African FUNk and JAzz. solid and mesmerizing. This music evokes a feeling of colourful world culture. You can hear this unique style on 'Irony of Peace'.",
        numKey: 1,
        link: "https://igi-iroko.com",
        linkTag: "igi iroko | multimedia",
    },
    MChristopher: {
        alt: "Mark Christopher",
        src: BioImgTwo,
        name: "Mark Christopher",
        bio: "Lead guitar, Producer and Music Director for Afunja.",
        numKey: 2,
        link: "",
        linkTag: "",
    },
    BIdowu: {
        alt: "Biola Idowu",
        src: BioImgThree,
        name: "Biola Idowu",
        bio: "Background Vocals.",
        numKey: 3,
        link: "http://coacoseal.com",
        linkTag: "CoaCoSeal.com",
    },
    YAdesina: {
        alt: "Yinka Adesina",
        src: BioImgFour,
        name: "Yinka Adesina",
        bio: "Background Vocals.",
        numKey: 4,
        link: "https://www.youtube.com/user/YNXmusic/featured",
        linkTag: "YNXmusic - YouTube",
    },
    JMbarani: {
        alt: "Judy Mbarani",
        src: BioImgFive,
        name: "Judy Mbarani",
        bio: "Background Vocals.",
        numKey: 5,
        link: "",
        linkTag: "",
    },
};

class AfunjaBiography extends Component {

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <ShowMoreText
                /* Default options */
                lines={1}
                more='Show more'
                less='Show less'
                anchorClass=''
                onClick={this.executeOnClick}
                expanded={false}
            >
                Afolabi Lipede | Flame music producer, bass guitarist, singer and song writer. Mark Christopher music director and guitarist. Flame's innovative and unique style engages bass harmonics in complex chord structures with an underlying bass riff. From this style has evolved an original style of music: AFUNJA, meaning African FUNk and JAzz. Solid and mesmerising, this music evokes a feeling of a colourful world culture. You can hear this unique style on Free.<br /><br />Afunja Music Publishing Ltd <sup>Ⓟ</sup> member of ASCAP, Tunecore, Amuse, Songtrust and PPL.
            </ShowMoreText>
        );
    }
}

function AboutAfunja(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>About Afunja</h3>
            <div className={classes.readMore}>
                <AfunjaBiography />
            </div>

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
                        <Box component="span" m={1} className={classes.box}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Paper elevation={3} className={classes.photo}>
                                        <img src={afunjaBioProps[key].src} alt={afunjaBioProps[key].alt} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variant="body2" color="textSecondary" variant="h5" component="h5">
                                        {afunjaBioProps[key].name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {afunjaBioProps[key].bio}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 20, }}>
                                        <a href={afunjaBioProps[key].link} target="_blank" >{afunjaBioProps[key].linkTag}</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
export default AboutAfunja;

