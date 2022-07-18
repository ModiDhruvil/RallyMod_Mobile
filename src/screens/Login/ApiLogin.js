import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from '../../redux/actions/ApiAction';
import { setItem } from '../../utils/LocalStorage';

const ApiLogin =  (email,password ,navigation) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(() => {
        axios
            .post('login', {
                email: email,
                password: password
            })
            .then((response) => {
                dispatch(fetchSuccess(response.data));
                setItem('isLogin', "true")
                setItem('token', response.data.data.token)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeMain' }]
                })
            })
            .catch((error) => {
                dispatch(fetchError(error));
                console.log(error);
            });
    });
};

export default ApiLogin;
