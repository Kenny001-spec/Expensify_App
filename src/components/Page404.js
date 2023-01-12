import React from "react";

import { NavLink } from "react-router-dom";
const Page404 = () => {
    return (<div>
        <h1>Error</h1>
        <h2>Page not found</h2>
        <NavLink to='/'>Homepage</NavLink>
        {/* <a href="/">Home</a> */}

    </div>)
}
export default Page404;