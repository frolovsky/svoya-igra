import { SEND_LOGOUT, SEND_LOGIN, SEND_REGISTRATION } from '@/store/auth/actions'
import { SET_USER } from '@/store/auth/mutations'
import { Api } from '@/services/Api'
export const auth = {
  namespaced: true,
  actions: {
    async [SEND_REGISTRATION](context, payload) {
      try {
        const user = await Api.post('users/register', payload);
        context.commit(SET_USER, user)
      } catch(e) {
        throw Error(e)
      }
    },
    async [SEND_LOGIN](context, payload) {
      try {
        const user = await Api.post('users/login', payload);
        context.commit(SET_USER, user)
      } catch(e) {
        throw Error(e)
      }
    },
    async [SEND_LOGOUT](context) {
      await Api.post('users/logout')
      context.commit(SET_USER, null)
    }
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user;
    }
  },
  state: () => ({
    user: null
  })
}