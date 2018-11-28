import { GET_SERIES, GET_SERIES_SUCCESS, GET_SERIES_ERROR } from "./types";
import { firestore } from "../firebase/firebase";

export const getAllSeries = () => {
    return dispatch => {
        dispatch({ type: GET_SERIES });
        
        return new Promise((resolve, reject) => {
            firestore.collection("series").get()
                .then(querySnapshot => {
                    let data = [];
                    querySnapshot.forEach((doc) => {
                        let snapshotData = doc.data();
                        snapshotData.startDate = new Date(snapshotData.startDate.seconds*1000).toLocaleDateString();
                        snapshotData.endDate = new Date(snapshotData.endDate.seconds*1000).toLocaleDateString();
                        data.push(snapshotData);
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
