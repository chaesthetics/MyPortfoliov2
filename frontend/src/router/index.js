import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [ 
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: () => import('../views/admin/DashboardView.vue')
        },
        {
          path: '/admin/abouts',
          name: 'abouts',
          component: () => import('../views/admin/AboutView.vue')
        },
        {
          path: '/admin/account',
          name: 'account',
          component: () => import('../views/admin/AccountView.vue')
        },
        {
          path: '/admin/contacts',
          name: 'contacts',
          component: () => import('../views/admin/ContactsView.vue')
        },
        {
          path: '/admin/personal',
          name: 'personal',
          component: () => import('../views/admin/PersonalInfoView.vue')
        },
        {
          path: '/admin/projects',
          name: 'projects',
          component: () => import('../views/admin/ProjectsView.vue')
        },
        {
          path: '/admin/techstacks',
          name: 'techstacks',
          component: () => import('../views/admin/TechstackView.vue')
        },
        {
          path: '/admin/tools',
          name: 'tools',
          component: () => import('../views/admin/ToolsView.vue')
        },
      ]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
