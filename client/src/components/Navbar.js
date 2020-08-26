import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Container, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(4),
    }
}))

export const Navbar = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [anchorEl, setAnchorEl] = useState(false)

    const auth = useContext(AuthContext)

    const logoutHandler = () => {
        auth.logout()
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Linker App
                    </Typography>
                    {isMobile
                        ? <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit"
                            onClick={handleClick}
                        >
                            Open Menu
                          </Button> :
                        <>
                            <Button className={classes.menuButton} color="inherit" component={NavLink} to='/create'>Create</Button>
                            <Button className={classes.menuButton} color="inherit" component={NavLink} to='/links'>Links list</Button>
                            <Button className={classes.menuButton} color="inherit" component={Link} to='/' onClick={logoutHandler}>Logout</Button>

                        </>
                    }
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem
                            component={NavLink}
                            to='/create'
                            onClick={handleClose}
                        >
                            Create
                            </MenuItem>
                        <MenuItem
                            component={NavLink}
                            to='/links'
                            onClick={handleClose}
                        >Links list</MenuItem>
                        <MenuItem
                            component={NavLink}
                            to='/'
                            onClick={logoutHandler}
                        >Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}