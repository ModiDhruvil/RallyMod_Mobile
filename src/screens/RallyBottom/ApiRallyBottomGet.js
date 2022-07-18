import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from '../../redux/actions/ApiAction';


const ApiRallyBottomGet =  (token) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(() => {
        axios
            .get('get-user-details',
            {
                headers: {
                    'Authorization': 'Bearer ' + `${token}`
                }
            })
            .then((response) => {
                dispatch(fetchSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchError(error));
                console.log(error);
            });
    });
};

export default ApiRallyBottomGet;