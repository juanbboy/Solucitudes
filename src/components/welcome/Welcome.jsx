import Formulario from "../formulario/Formulario"
import Listarequest from "../listarequest/Listarequest"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { startLoadingRequests } from "../../actions/request"
// import { useNavigate } from 'react-router-dom';
import Listmyrequest from "../listarequest/Listmyrequest"

const Welcome = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = dispatch(startLoadingRequests());
        return () => {
            if (typeof unsubscribe === 'function') unsubscribe();
        };
    }, [dispatch]);


    return (
        <div className="text-center">
            <h1>Sistema de gestion de solicitudes</h1>
            <hr />
            <div className="row">
                <div className="col-sm-6">
                    <Formulario />
                    <Listmyrequest />
                </div>
                <div className="col-sm-6">
                    <Listarequest />
                </div>
            </div>
        </div>
    )
}

export default Welcome