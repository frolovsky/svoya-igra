import Vue from 'vue'

export const Auth = {
    isAuthorized() {
        const user = Vue.$cookies.get('auth-user-payload');
        return !!user;
    }
}