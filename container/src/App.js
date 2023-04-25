import React, {lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import {Router, Redirect, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Progress from "./components/Progress";

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

    useEffect(() => {
        if(isSignedIn){
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {
                                !isSignedIn && <Redirect to="/" />
                            }
                            <DashboardApp />
                        </Route>
                        <Route path="/">
                            <MarketingApp />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </StylesProvider>
    );
};