import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import MyJobs from './views/MyJobs.vue'
import Profile from './views/Profile.vue'
import JobDetails from './views/JobDetails.vue'
import AddUserProfile from './views/AddUserProfile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import AddNewJobs from './views/AddNewJobs.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  id: "",
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/myjobs',
      name: 'myjobs',
      component: MyJobs
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/jobdetails/:id',
      name: 'jobdetails',
      component: JobDetails
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: AddUserProfile
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/addjob',
      name: 'addjob',
      component: AddNewJobs
    },
  ]
})
