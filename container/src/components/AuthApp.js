import React, {useEffect, useRef} from "react";
import { mount } from 'auth/AuthApp';
import {useHistory} from "react-router-dom";

const AuthApp = () => {
    const ref = useRef(null);

    const history = useHistory();

    useEffect(() => {
        /**
         * Mount marketing app and set onNavigate callback
         * This callback will be called when navigation occurs
         * in the marketing app
         */
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                pathname !== nextPathname && history.push(nextPathname);
            },
            initialPath: history.location.pathname
        });

        /**
         * Listen to container history changes
         */
        const historyListener = history.listen(onParentNavigate);

        return () => {
            historyListener();
        }
    }, []);

    return <div ref={ref} />;
};

export default AuthApp;