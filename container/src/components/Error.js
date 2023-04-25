import React from 'react';
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    errorContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        height: '100%'
    },
    errorMessage: {
        color: theme.palette.error.main
    },
    errorTitle: {
        color: theme.palette.primary.main,
        fontFamily: 'Roboto',
    }
}));

const Error = ({ error }) => {
    const classes = useStyles();
    return (
        <section className={classes.errorContainer}>
            <h1 className={classes.errorTitle}>Something were wrong</h1>
            <div className={classes.errorMessage}>{error}</div>
        </section>
    );
}

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error