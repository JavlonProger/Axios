import { NavLink } from "react-router-dom";

const { Fragment } = require("react")

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <div className="navbar-nav text-center">
                        <NavLink className={"nav-link mx-2 text-light"} to={"/"}>Home</NavLink>
                        <NavLink className={"nav-link mx-2 text-light"} to={"/about/"}>About</NavLink>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation;