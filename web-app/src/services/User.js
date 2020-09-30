import { Api } from '@/services/Api';

export const User = {
    create(data) {
        return Api.post('users/register', data)
    },
    login(data) {
        return Api.post('users/login', data)
    }
}