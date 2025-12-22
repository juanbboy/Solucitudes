import { useDispatch, useSelector } from 'react-redux';
import { updateRequest } from '../../actions/request';

const Listmyrequest = () => {

    const request = useSelector(state => state.request.data);
    const userArea = useSelector(state => state.auth.displayName);
    const dispatch = useDispatch();

    const filteredRequests = request.filter(
        req => req.creadopor === userArea
    );


    const handleResponder = async (req) => {
        // Actualiza la solicitud con la respuesta y cambia el estado
        await dispatch(updateRequest(req.id, {
            estado: "Cerrada"
        }));
    }


    const handleResponderd = async (req) => {
        const respuesta = prompt("Escribe la respuesta para la solicitud:");
        if (respuesta && respuesta.trim() !== "") {
            // Actualiza la solicitud con la respuesta y cambia el estado
            await dispatch(updateRequest(req.id, {
                respuestauser: respuesta,
                estado: "Pendiente"
            }));
        }
    };


    return (
        <div>
            <h4>Mis Solicitudes</h4>
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
                                    Estado: {req.estado}
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
                                    Actualizado: {req.updatedAt?.toDate ? req.updatedAt.toDate().toString() : req.updatedAt?.toString()}
                                </div>
                            </div>
                            <div>
                                {req.estado === "Resuelta" &&
                                    <div>
                                        <button className='btn btn-dark m-2' onClick={() => handleResponder(req)}>
                                            De acuerdo !!!
                                        </button>

                                        <button className='btn btn-dark m-2' onClick={() => handleResponderd(req)}>
                                            No resuelta !!!
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Listmyrequest