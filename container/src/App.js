import React, {lazy, Suspense} from "react";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
const MarketingApp =  lazy(() => import("./components/MarketingApp"));

export default () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <MarketingApp />
                </Suspense>
            </>
        </BrowserRouter>
    );
};