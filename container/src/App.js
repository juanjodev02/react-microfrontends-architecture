import React, {lazy, Suspense} from "react";
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Progress from "./components/Progress";

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthApp} />
                            <Route path="/"  component={MarketingApp}/>
                        </Switch>
                    </Suspense>
                </>
            </BrowserRouter>
        </StylesProvider>
    );
};