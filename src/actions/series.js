import { GET_SERIES, GET_SERIES_SUCCESS, GET_SERIES_ERROR, ADD_SERIES, ADD_SERIES_SUCCESS, ADD_SERIES_ERROR } from "./types";
import { firestore } from "../firebase/firebase";

export const getAllSeries = () => {
    return dispatch => {
        dispatch({ type: GET_SERIES });
        
        return new Promise((resolve, reject) => {
            firestore.collection("series").get()
                .then(querySnapshot => {
                    let data = [];
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    dispatch({ type: GET_SERIES_SUCCESS, data: data });
                    resolve(data);
                }).catch(error => {
                    dispatch({ type: GET_SERIES_ERROR });
                    reject(error);
                });
        });
    };
};

export const addSeries = values => {
    return dispatch => {
        dispatch({ type: ADD_SERIES });

        return new Promise((resolve, reject) => {
            console.log(values);
            firestore.collection("series")
                .add(values)
                .then(docRef => {
                    docRef.get().then(doc => {
                        dispatch({ type: ADD_SERIES_SUCCESS, data: doc.data() });
                        resolve(doc.data());
                    })
                })
                .catch(error => {
                    dispatch({ type: ADD_SERIES_ERROR });
                    reject(error);
                });
        })
    }
}