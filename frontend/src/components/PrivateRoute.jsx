import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const PrivateRoute = () => {
    const {isLoggedIn} = useAuth();
    //Si el usuario no esta autenticado redirige a la pagina de iniico
    return isLoggedIn ? <Outlet/> : <Navigate to="/" />;
};

export default PrivateRoute;