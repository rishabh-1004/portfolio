import React from 'react';
import Navbar from './Navbar';
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import project1 from "../images/html-css-javascript.jpg";
import project2 from "../images/javascript-fullstack.jpg";


const useStyles=makeStyles({
    mainContainer:{
        background:"#223",
        height:"100%",
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
           
            <Grid container justify="center" >
                {/* Project 1 start */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Proj1" height="140" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1    
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.    
                            </Typography>    
                        </CardContent>
                        </CardActionArea>    
                        <CardActions>
                            <Button size="small" color="primary"> Share </Button>
                            <Button size="small" color="primary"> Demo </Button>
                        </CardActions>
                </Card>
                </Grid>
                {/* Project 1 end */}
                {/* Project 2 start */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Proj1" height="140" image={project2}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2    
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.    
                            </Typography>    
                        </CardContent>
                        </CardActionArea>    
                        <CardActions>
                            <Button size="small" color="primary"> Share </Button>
                            <Button size="small" color="primary"> Demo </Button>
                        </CardActions>
                </Card>
                </Grid>
                {/* Project 2 end */}
                {/* Project 3 start */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Proj1" height="140" image={project1}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 1    
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.    
                            </Typography>    
                        </CardContent>    
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary"> Share </Button>
                            <Button size="small" color="primary"> Demo </Button>
                        </CardActions>
                </Card>
                </Grid>
                {/* Project 3 end */}
                 {/* Project 4 start */}
                 <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="Proj1" height="140" image={project2}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2    
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.    
                            </Typography>    
                        </CardContent>   
                        </CardActionArea> 
                        <CardActions>
                            <Button size="small" color="primary"> Share </Button>
                            <Button size="small" color="primary"> Demo </Button>
                        </CardActions>
                </Card>
                </Grid>
                {/* Project 4 end */}
            </Grid>    
        </Box>
    )
}

export default Portfolio
