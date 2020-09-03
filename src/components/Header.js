import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
    } from "@material-ui/core";
import avatar from '../avatar.png';
import Typed from 'react-typed';
import {makeStyles} from "@material-ui/core/styles";
import {primaryAccentColor , secondaryAccentColor } from '../constants';
import {Name, Roles} from '../constants/Resume';


const useStyles= makeStyles( theme => ({
        avatar:{
            width:theme.spacing(15),
            height:theme.spacing(15),
            margin:theme.spacing(1)
        },
        title:{
            color:primaryAccentColor,
        },
        subTitle:{
            color:secondaryAccentColor,
            marginBottom:"3rem"
        },
        typedContainer:{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            width:"100vw",
            textAlign:"center",
            zIndex:1
        }
}));

const Header = () => {
    const classes= useStyles();
    return (
        <div>
            <Box className={classes.typedContainer}>
                <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt={Name}></Avatar>
                </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={[Name]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={Roles} 
                typeSpeed={40}
                backSpeed={60}
                loop />
            </Typography>
            </Box>
        </div>
    )
}

export default Header
