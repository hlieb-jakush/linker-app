import React from 'react'
import { Paper, makeStyles, Typography, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    }
}))

export const LinkCard = ({ link }) => {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant='h6' gutterBottom>Link information</Typography>
                <Typography gutterBottom>Original url: <Button className={classes.menuButton} color="primary" href={link.oldUrl}>{link.oldUrl}</Button></Typography>
                <Typography gutterBottom>New url: <Button className={classes.menuButton} color="primary" href={link.newUrl}>{link.newUrl}</Button></Typography>
                <Typography gutterBottom>Clicks: {link.clicks}</Typography>
                <Typography>Created date: {new Date(link.date).toLocaleDateString()}</Typography>
            </Paper>
        </Grid>
    )
}