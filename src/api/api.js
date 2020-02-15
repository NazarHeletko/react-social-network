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
    },
    logInApi(email, password, rememberMe){
        return instance.post('auth/login', {email, password, rememberMe});
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

export const profile = {
    getUserProfile (uId) {
        return instance.get(`profile/${uId}`);
    },
    setProfilePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};

export const users = {
    getTotalPagesNumb(){
        return instance.get(`users`);
    },
    getTotalUsersApi(page = 1, count = 6){
        return instance.get(`users?page=${page}&count=${count}`);
    },
    followApi(uId){
        return instance.post(`follow/${uId}`);
    },
    unfollowApi(uId){
        return instance.delete(`follow/${uId}`);
    }
};