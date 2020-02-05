import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
       'API-KEY': '8230b4aa-7d0f-453b-94b8-289e7c76497c'
   }
});

export const auth = {
    isAuthApi(){
        return instance.get('auth/me');
    },
    logOut(){
        return instance.delete('auth/login');
    }
};

export const statusData = {
    getStatusApi(userId){
        return instance.get(`profile/status/${userId}`);
    },
    setStatus(status){
        return instance.put('profile/status', {status})
    }
};

export const getUserProfile = (uId) => {
    return instance.get(`profile/${uId}`);
};