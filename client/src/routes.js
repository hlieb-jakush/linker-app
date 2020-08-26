import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import SignIn from './pages/SignInPage'
import SignUp from './pages/SignUpPage'

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage />
                </Route>
                <Redirect to='/create' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <SignIn />
            </Route>
            <Route path='/register' exact>
                <SignUp />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}