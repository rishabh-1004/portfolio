import React, {useState} from 'react';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Icon,
    Typography,
    Box
} from "@material-ui/core";
import {
    MenuOpen,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';
import avatar from '../avatar.png';
import { makeStyles } from '@material-ui/core/styles';


const useStyles=makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    ListItem:{
        color:"tan"
    }
}));

const menuItems= [
    {
        listIcon:<Home />,
        listText:"Home"
    },
    {
        listIcon:<AssignmentInd />,
        listText:"resume"
    },
    {
        listIcon:<Apps />,
        listText:"Portfolio"
    },
    {
        listIcon:<ContactMail />,
        listText:"Contacts"
    },
]

const Navbar = () => {
    const [state,setState] = useState({
        right:false
    })

    const toggleSlider= (slider,open) =>() => {
        setState({...state,[slider]:open});
    }
    const classes = useStyles();

    const sideList= slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider("right",true)} >
            <Avatar className={classes.avatar} src={avatar} alt="Rishabh Sharma" />
            <Divider />
            <List>
               {menuItems.map((lstItem,key)=>(
                    <ListItem button key={key}> 
                    <ListItemIcon className={classes.ListItem}>
                        {lstItem.listIcon}
                    </ListItemIcon>   
                    <ListItemText className={classes.ListItem} primary={lstItem.listText} >                   
                    </ListItemText>
                </ListItem> 
               ))}
               
            </List>
        </Box>
    );

    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{backgroundColor:"#222222"}}> 
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <MenuOpen style={{color:"tomato"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                        {sideList("right")}    
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
        )
}

export default Navbar;