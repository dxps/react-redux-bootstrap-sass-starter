import React from "react";
import { Link } from "react-router";
import style from "./style";

const MainAppBar = () => (
    <div className={style.appbar}>
        <h1 className={style.title}>
            <Link to="/">(starter) React Toolbox + Redux</Link>
        </h1>

        <Link to="/signin">
            <button className={style.button}>Sign in</button>
        </Link>
    </div>
);

export default MainAppBar;
