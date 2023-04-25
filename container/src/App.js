import React, {lazy, Suspense, } from "react";
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Progress from "./components/Progress";
import ErrorBoundary from "./components/ErrorBoundary";

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <ErrorBoundary>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/">
                                <MarketingApp />
                            </Route>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </BrowserRouter>
        </StylesProvider>
    );
};