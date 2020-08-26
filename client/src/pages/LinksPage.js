import React, { useState, useContext, useCallback, useEffect } from 'react'
import { Container, Typography, makeStyles, CircularProgress } from '@material-ui/core'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { LinksList } from '../components/LinksList'


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4)
    }
}))

export const LinksPage = () => {
    const classes = useStyles()

    const [links, setLinks] = useState()
    const { loading, request } = useHttp()
    const { token } = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    return (
        <Container component="main">
            <Typography component="h1" variant="h5" gutterBottom className={classes.title}>Links Page</Typography>
            {!loading && links && <LinksList links={links} />}
            {loading && <CircularProgress />}
        </Container>
    )
}