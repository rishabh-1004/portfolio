import React, { useState } from 'react';
import Navbar from './Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles({
    particlesCanvas:{
        position:"absolute"
    }
})


const Home = () => {
    const classes= useStyles();
    return (
        <div>
            
            <CssBaseline />
            <Navbar></Navbar>
            <Header/>
            <Particles canvasClassName={classes.particlesCanvas}
                params={{
                    particles:{
                        number:{
                            value:45,
                            density:{
                                enables:true,
                                value_area:900
                            }
                        },
                        shape:{
                            type:"circle",
                            stroke:{
                                width:1,
                                color:"tomato"
                            }
                        },
                        size:{
                            value:8,
                            random:true,
                            anim:{
                                enable:true,
                                speed:5,
                                size_min:0.1,
                                sync:true
                            }
                        },
                        opacity:{
                            value:1,
                            random:true,
                            anim:{
                                enable:true,
                                speed:1,
                                opacity_min:0.1,
                                sync:true
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home;