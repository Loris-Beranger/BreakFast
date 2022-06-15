import { apiUrl } from '../../data/data';

const axios = require('axios');
 
export function signup (nameValue, emailValue, passwordValue, addressValue, zipcodeValue) {
    return axios.post(apiUrl + '/user', JSON.stringify(
        {
            "name": nameValue,
            "email": emailValue,
            "password": passwordValue,
            "address": addressValue,
            "zip_code": zipcodeValue
        }
    ))
}