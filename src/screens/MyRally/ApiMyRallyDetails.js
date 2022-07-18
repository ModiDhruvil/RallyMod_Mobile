import axios from 'axios';
import { fetchData, fetchSuccess, fetchError, resetData } from '../../redux/actions/ApiAction';

const ApiMyRallyDetails =  (token) => (dispatch) => {
    dispatch(fetchData());
    return new Promise((resolve,reject) => {
        axios
            .post('getRally',
            {
                type: 0,
            },
            {
                headers: { 'Authorization': 'Bearer ' + `${token}` }
            })
            .then((response) => {
                resolve(dispatch(fetchSuccess(response.data)));
            })
            .catch((error) => {
                reject(fetchError(error));
                // dispatch(fetchError(error));
                console.log(error);
            });
    });
};

export default ApiMyRallyDetails;

