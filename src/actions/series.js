import { GET_SERIES, GET_SERIES_SUCCESS, GET_SERIES_ERROR } from "./types";
import { firestore } from "../firebase/firebase";

export const getAllSeries = () => {
    return dispatch => {
        dispatch({ type: GET_SERIES });
        
        return new Promise((resolve, reject) => {
            firestore.collection("series").get()
                .then(querySnapshot => {
                    console.log('start');
                    let data = [];
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    console.log(data);
                    dispatch({ type: GET_SERIES_SUCCESS, data: data });
                    resolve(data);
                }).catch(error => {
                    dispatch({ type: GET_SERIES_ERROR });
                    reject(error);
                });
        });
    };
};
