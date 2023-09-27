import axios from 'axios';

export async function userLogin(access_token) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://backend.codingclubtkmce.tech/users/google/',
            headers: {"Content-Type": "application/json"},
            data: {
                access_token,
                code:200
            }
        });
        console.log(response);
        return {
            status: response.status,
            response: response.data
        }
    } catch(err) {
        return err;
    }
}