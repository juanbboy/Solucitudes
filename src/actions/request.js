import { types } from "../types/types";
import { db } from "../firebase/firebase-config";
import {
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    onSnapshot
} from "firebase/firestore";

// Acción para escuchar en tiempo real las solicitudes
export const startLoadingRequests = () => {
    return (dispatch) => {
        const requestCollectionRef = collection(db, "request");
        const q = query(requestCollectionRef);

        return onSnapshot(q, (snapshot) => {
            const requestData = snapshot.docs.map((document) => ({
                ...document.data(),
                id: document.id,
            }));
            dispatch(loadRequests(requestData));
        }, (err) => {
            dispatch(requestError("Error al cargar las solicitudes."));
        });
    };
};

export const loadRequests = (requests) => ({
    type: types.requestLoad,
    payload: requests
});

export const requestError = (error) => ({
    type: types.requestError,
    payload: error
});

// Acción para crear una solicitud
export const createRequest = (userArea, area, solicitud) => {
    return async () => {
        const requestCollectionRef = collection(db, "request");
        await addDoc(requestCollectionRef, {
            creadopor: userArea,
            area,
            solicitud,
            fecha: new Date(),
            respuesta: "Pendiente",
            respuestauser: "",
            estado: "Pendiente",
        });
    };
};


// Acción para actualizar una solicitud
export const updateRequest = (id, fieldsToUpdate) => {
    return async () => {
        const requestDoc = doc(db, "request", id);
        await updateDoc(requestDoc, {
            ...fieldsToUpdate,
            updatedAt: new Date()
        });
    };
};

// Acción para eliminar una solicitud
export const deleteRequest = (id) => {
    return async () => {
        const requestDoc = doc(db, "request", id);
        await deleteDoc(requestDoc);
    };
};
