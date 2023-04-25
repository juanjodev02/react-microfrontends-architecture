import React, {useEffect, useRef} from "react";
import { mount } from 'auth/AuthApp';
import {useHistory} from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null);

    const history = useHistory();

    useEffect(() => {
        /**
         * Mount marketing app and set onNavigate callback
         * This callback will be called when navigation occurs
         * in the marketing app
         */
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                pathname !== nextPathname && history.push(nextPathname);
            },
            onSignIn,
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