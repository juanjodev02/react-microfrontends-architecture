import React from "react";
import {withRouter} from "react-router-dom";
import Error from "./Error";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: ""};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({error: ""});
        }
    }

    componentDidCatch(error) {
        this.setState({error: `${error.name}: ${error.message}`});
    }

    render() {
        const {error} = this.state;
        if (error) {
            return (
                <Error error={error} />
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}

export default withRouter(ErrorBoundary)