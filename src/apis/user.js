import axios from 'axios';

export async function get_profile(token) {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://backend.codingclubtkm.tech/api/users/me/',
            headers: { "Content-Type": "application/json", "Authorization": `token ${token}` },
        });
        return {
            status: response.status,
            response: response.data
        }
    } catch(err) {
        return err;
    }
}