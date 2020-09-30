import Vue from 'vue'
import VueRouter from 'vue-router'
import { Auth } from '@/services/auth'

Vue.use(VueRouter)

const App = () => import('../pages/app/App.vue')
const Home = () => import('../pages/home/Home.vue')
const Login = () => import('../components/auth/login/login.vue')
const Register = () => import('../components/auth/register/register.vue')

const routes = [
{
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
  path: '/',
  name: 'Home',
  redirect: '/login',
  component: Home
},
{
  path: '/app',
  name: 'App',
  component: App,
  meta: {
    authOnly: true
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
    next({ name: 'App' });
  } else {
    next();
  }
});

export default router
