import React, {lazy, Suspense} from "react";
const MarketingApp =  lazy(() => import("./components/MarketingApp"));

export default () => {
    return (
        <div>
            <h1>Container</h1>
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                <MarketingApp />
            </Suspense>
        </div>
    );
};