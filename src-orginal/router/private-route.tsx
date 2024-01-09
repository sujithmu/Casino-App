import { useContext } from "react";
import { UserAuthContext } from "../state/auth-context";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const {
        gambler: { username },
    } = useContext(UserAuthContext);

    return username ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;