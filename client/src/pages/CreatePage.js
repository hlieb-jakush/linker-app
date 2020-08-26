import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export const CreatePage = () => {
    const classes = useStyles()

    const history = useHistory()
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [link, setLink] = useState('')

    const createHandler = async event => {
        event.preventDefault()
        try {
            const data = await request('api/link/generate', 'POST', { oldUrl: link }, { Authorization: `Bearer ${auth.token}` })
            history.push(`/detail/${data.link._id}`)
        } catch (e) { }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create link
                </Typography>
                <form className={classes.form}
                    onSubmit={createHandler}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="link"
                        label="Url Address"
                        name="link"
                        autoFocus
                        onChange={e => setLink(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Create
                    </Button>
                </form>
            </div>
        </Container >
    )
}