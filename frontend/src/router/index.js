import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'LogInPage',
      component: () => import('../views/LogInPage.vue') // set home as path '/'
    },
    {
        path: '/InfoTeach',
        name: 'InfoTeach',
        component: () => import('../views/InfoTeach.vue')
      },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue')
      },
      {
        path: '/GradePage',
        name: 'GradePage',
        component: () => import('../views/Grade.vue')
      },
      {
        path: '/TeachTable',
        name: 'TeachTable',
        component: () => import('../views/TeachTable.vue')
      },
      {
        path: '/TeachListSubject',
        name: 'TeachListSubject',
        component: () => import('../views/TeachListSubject.vue')
      },
      {
        path: '/subjectTeacher',
        name: 'subjectTeacher',
        component: () => import('../views/subjectTeacher.vue')
      },
      {
        path: '/modifySubject',
        name: 'modifySubject',
        component: () => import('../views/modifySubject.vue')
      }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
