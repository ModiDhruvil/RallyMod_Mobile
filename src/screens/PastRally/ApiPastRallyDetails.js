import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from '../../redux/actions/ApiAction';

const ApiPastRallyDetails =  (token) => (dispatch) => {
    dispatch(fetchData());
    return new Promise((resolve,reject) => {
        axios
            .post('getRally',
            {
                type: 2,
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

export default ApiPastRallyDetails;

