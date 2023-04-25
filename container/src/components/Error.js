import React from 'react';
import PropTypes from "prop-types";
const Error = ({ error }) => {
    return (
        <section>
            <h1>Something were wrong</h1>
            <div>{error}</div>
        </section>
    );
}

Error.propTypes = {
    error: PropTypes.string.isRequired
}

export default Error