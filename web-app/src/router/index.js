import Vue from 'vue'
import VueRouter from 'vue-router'
import { Auth } from '@/services/auth'

Vue.use(VueRouter)

const Home = () => import('../pages/home/Home.vue')
const Login = () => import('../pages/auth/login/login.vue')
const Register = () => import('../pages/auth/register/register.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authOnly: true,
      layout: 'main',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'auth'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _from, next) => {
  const { authOnly } = to.meta;
  if (!Auth.isAuthorized() && authOnly) {
    next({ name: 'Login' });
  } else if (Auth.isAuthorized() && !authOnly) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
