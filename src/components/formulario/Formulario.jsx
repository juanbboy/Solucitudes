import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest } from '../../actions/request';


function Formulario() {
    const [area, setArea] = useState('');
    const [solicitud, setSolicitud] = useState('');
    const [error, setError] = useState(null);


    const dispatch = useDispatch();
    const requestError = useSelector(state => state.request.error);
    const userArea = useSelector(state => state.auth.displayName);

    // --- CREAR SOLICITUD ---
    const createrequest = async () => {
        setError(null);
        try {
            await dispatch(createRequest(userArea, area, solicitud));
            setArea('');
            setSolicitud('');
            console.log("Solicitud añadida con éxito!");
        } catch (e) {
            console.error("Error al añadir solicitud: ", e);
            setError("No se pudo añadir la solicitud.");
        }
    };


    if (error || requestError) {
        return <p style={{ color: 'red' }}>Error: {error || requestError}</p>;
    }

    return (
        <div>
            {/* Formulario para Crear Producto */}
            <div className='m-5'>
                <h4>Nueva Solicitud</h4>
                <div className='form-group text-start'>
                    <br />
                    <select
                        className="form-select"
                        size="lg"
                        name="area"
                        id="area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                    >

                        <option>Departamento</option>
                        <option value="Elasticos">Elasticos</option>
                        <option value="Tintoreria">Tintoreria</option>
                        <option value="Circular PD">Circular PD</option>
                        <option value="Circular GD">Circular GD</option>
                    </select>
                    <div className="form-group">
                        <br />
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            type="text"
                            placeholder="Solicitud"
                            value={solicitud}
                            onChange={(e) => setSolicitud(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="m-3">
                    <button className="btn btn-success" onClick={createrequest}>Crear solicitud</button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Formulario;
