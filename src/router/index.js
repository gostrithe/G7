import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },

    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),

      children: [
        {
          path: 'history',
          name: 'userHistory',
          component: () => import('../views/BookshelfView.vue')
        },

        {
          path: 'collection',
          name: 'userCollection',
          component: () => import('../views/CollectionView.vue')
        }
      ]
    },

    {
      path: '/:id(\\d+)',
      name: 'novel',
      component: import('../views/NovelView.vue')
    },

    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
