import { createRouter, createWebHashHistory } from 'vue-router'
import ClientHomePage from '../views/ClientHomePage'
import ClientLoginPage from '../views/ClientLoginPage'

const routes = [
  {
    path: '/',
    name: 'clienthome',
    component: ClientHomePage
  }, {
    path: `/clientlogin`,
    name: `client log in`,
    component: ClientLoginPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
