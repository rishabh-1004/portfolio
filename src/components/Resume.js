import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from './Navbar';
import { Rotate90DegreesCcw } from '@material-ui/icons';
import * as Constants from '../constants';
import {ExperienceDetails} from '../constants/Resume';

const useStyles=makeStyles(theme => ({
    mainContainer:{
        background: Constants.resumePageBackground,
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:Constants.TimeLineMainBar,
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: Constants.TimeLineYearBottomBorder,
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after": {
            content:"''",
            position:"absolute",
        },
        "&:before": {
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:Constants.ArrowRight,
            borderWidth:"0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:Constants.secondaryAccentColor,
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:Constants.ArrowLeft,
                
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:Constants.primaryAccentColor,
        color:Constants.ResumePageYearColor,
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
    },
    heading:{
        color:Constants.primaryAccentColor,
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subHeading:{
        color:Constants.ResumePositionName,
        padding:"0",
        textTransform:"uppercase"
    }
}));



const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
            {ExperienceDetails.map((experience,key)=>(
                <>
                     <Typography 
                     variant="h2" 
                     className={`${classes.timeLineYear} ${classes.timeLineItem} `}>{experience.year}
                 </Typography>
                 <Box component="div" className={classes.timeLineItem}>
                     <Typography variant="h5"  className={classes.subHeading}>
                            {experience.position}
                     </Typography>
                     <Typography variant="body1" >
                            {experience.companyName}
                     </Typography>
                     <Typography variant="subtitle1" >
                            {experience.details}
                     </Typography>
 
                 </Box> 
                 </>      
                        ))};
                

            </Box>
        </Box>
        </>
    )
}

export default Resume
