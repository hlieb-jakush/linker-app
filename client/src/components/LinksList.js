import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export const LinksList = ({ links }) => {
    const classes = useStyles()

    if (!links.length) {
        return <p>Ссылок пока нет</p>
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell>Original url</TableCell>
                        <TableCell>New url</TableCell>
                        <TableCell align="right">Detail page</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.map((link, index) => (
                        <TableRow key={link._id}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{link.oldUrl}</TableCell>
                            <TableCell>{link.newUrl}</TableCell>
                            <TableCell align="right"><Button className={classes.menuButton} color="primary" component={Link} to={`/detail/${link._id}`}>Open</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
