import { useSelector, useDispatch } from 'react-redux';
import { updateRequest } from '../../actions/request';

const Listarequest = () => {
    const request = useSelector(state => state.request.data);
    const userArea = useSelector(state => state.auth.displayName);
    const dispatch = useDispatch();


    // Filtra solo las solicitudes del usuario activo que no estén resueltas
    const filteredRequests = request.filter(
        req => req.area === userArea && req.estado !== "Resuelta" && req.estado !== "Cerrada"
    );

    const handleResponder = async (req) => {
        const respuesta = prompt("Escribe la respuesta para la solicitud:");
        if (respuesta && respuesta.trim() !== "") {
            // Actualiza la solicitud con la respuesta y cambia el estado
            await dispatch(updateRequest(req.id, {
                respuesta,
                estado: "Resuelta"
            }));
        }
    };

    return (
        <div>
            <h4>Solicitudes Pendientes</h4>
            {filteredRequests.length === 0 ? (
                <p>No hay solicitudes disponibles.</p>
            ) : (
                <ul>
                    {filteredRequests.map((req) => (
                        <div key={req.id} className="card text-start mb-2 p-2 border rounded">
                            <div className="card-body">
                                <div className="card-title">
                                    <div>
                                        <h4>{req.area}</h4>
                                    </div>
                                </div>
                                <div>
                                    Solicitud: {req.solicitud}
                                </div>
                                <div>
                                    Fecha: {req.fecha?.toDate ? req.fecha.toDate().toString() : req.fecha?.toString()}
                                </div>
                                <div>
                                    Respuesta: {req.respuesta}
                                </div>
                                <div>
                                    Estado: {req.estado}
                                </div>
                                <div>
                                    Actualizado: {req.updatedAt?.toDate ? req.updatedAt.toDate().toString() : req.updatedAt?.toString()}
                                </div>
                                {req.respuestauser !== "" &&
                                    <div>

                                        Respuesta Area: {req.respuestauser}

                                    </div>
                                }
                            </div>
                            <div>
                                {req.estado === "Pendiente" &&
                                    <button className='btn btn-primary' onClick={() => handleResponder(req)}>
                                        Responder
                                    </button>
                                }
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Listarequest


