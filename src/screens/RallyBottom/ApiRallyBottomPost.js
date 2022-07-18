import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from '../../redux/actions/ApiAction';


const ApiRallyBottomPost =  (firstName,lastName ,userName,vin,year,model,color,lincensePlateNumber,profileImg,linceseNumberImg,token) => (dispatch) => {
    console.log('value',firstName,lastName,userName,vin,year,model,color,lincensePlateNumber,profileImg,linceseNumberImg,token)
    dispatch(fetchData());
    var formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('username', userName);
    formData.append('user_role', 2);
    formData.append('vin', vin);
    formData.append('car_year', year);
    formData.append('car_model', model);
    formData.append('car_colour', color);
    formData.append('license_plate_number', lincensePlateNumber);
    formData.append('created_from', 'Hello');
    formData.append('profile_image', {
        uri: Platform.OS === 'android' ? profileImg : `file:///${profileImg}`,
        name: "image.jpg",
        type: "image/jpeg",
    });
    formData.append('driving_license_image', {
        uri: Platform.OS === 'android' ? linceseNumberImg : `file:///${linceseNumberImg}`,
        name: "image.jpg",
        type: "image/jpeg",
    });


    return new Promise(() => {
        axios
            .post('update-profile', formData,
            {
                headers: {
                    'Content-Type': "multipart/form-data",
                    'Authorization': 'Bearer ' + `${token}`
                }
            })
            .then((response) => {
                dispatch(fetchSuccess(response.data));
                console.log(response)
            })
            .catch((error) => {
                dispatch(fetchError(error));
                console.log(error);
            });
    });
};

export default ApiRallyBottomPost;