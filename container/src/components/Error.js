import React from 'react';
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flex: 1,
        height: '100%'
    },
    error: {
        color: theme.palette.error.main
    },
    title: {
        color: theme.palette.primary.main,
        fontFamily: 'Roboto',
    }
}));

const Error = ({ error }) => {
    const classes = useStyles();
    return (
        <section className={classes.container}>
            <h1 className={classes.title}>Something were wrong</h1>
            <div className={classes.error}>{error}</div>
        </section>
    );
}

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error