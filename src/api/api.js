import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
       'API-KEY': '5b4d0c81-348d-41bc-b2b4-5729319bc381'
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