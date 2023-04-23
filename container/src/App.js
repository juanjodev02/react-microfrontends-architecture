import React, {lazy, Suspense} from "react";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
const MarketingApp =  lazy(() => import("./components/MarketingApp"));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <MarketingApp />
                    </Suspense>
                </>
            </BrowserRouter>
        </StylesProvider>
    );
};