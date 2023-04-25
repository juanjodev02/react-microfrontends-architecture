import React, {useEffect, useRef} from "react";
import { mount } from 'dashboard/DashboardApp';

const DashboardApp = ({ onSignIn }) => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};

export default DashboardApp;