import React, { useState, useCallback, useContext, useEffect } from 'react'
import { makeStyles, Container, Typography, CircularProgress } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { LinkCard } from '../components/LinkCard'


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4)
    }
}))

export const DetailPage = () => {
    const classes = useStyles()

    const { request, loading } = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id
    const { token } = useContext(AuthContext)

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, { Authorization: `Bearer ${token}` })
            setLink(fetched)
        } catch (e) { }
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    return (
        <Container component="main">
            <Typography component="h1" variant="h5" gutterBottom className={classes.title}>Detail Page</Typography>
            {!loading && link && <LinkCard link={link} />}
            {loading && <CircularProgress />}
        </Container>
    )
}