import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App'

/**
 * @typedef MountOptions
 * @property {function} [onNavigate] - callback to be called when navigation occurs
 * @property {object} defaultHistory - default history object
 * @property {string} initialPath - initial path
 * @property {function} [onSignIn] - callback to be called when user signs in
 */

/**
 * @typedef MountResponseObject
 * @property {function} onParentNavigate - callback to be called when navigation occurs
 */

/**
 * Mount function to start up the app
 * @param {HTMLElement} el - reference to the DOM element
 * @param {MountOptions} options - options
 * @returns {MountResponseObject}  - object containing onParentNavigate function
 */
const mount =  (el, {
    onNavigate = () => {},
    defaultHistory,
    initialPath= '',
    onSignIn = () => {}
} = {}) => {
    /**
     * Create memory history for react router
     */
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    /**
     * Add event listener to notify to container when navigation occurs
     */
    history.listen(onNavigate);

    /**
     * Render the app
     */
    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;

            pathname !== nextPathname && history.push(nextPathname);
        }
    }
}

/**
 * If we are in development mode and in isolation,
 * call mount immediately
 */
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if(devRoot){
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

/**
 * If we are running through container,
 * we should export the mount function
 */
export { mount };