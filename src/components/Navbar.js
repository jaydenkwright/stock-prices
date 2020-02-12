import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const navBarStyle = makeStyles({
    navBarTitle: {
        fontSize: "2em",
    },
    colorDefault: {
        backgroundColor: "red",
    },
});

function Navbar () {
        const classes = navBarStyle()
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={ classes.navBarTitle} variant="title" color="default" style={{ backgroundColor: "#61d4b3"}}>
                           
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

export default Navbar
