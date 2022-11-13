import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user/bookshelf',
      redirect: '/user/history'
    },

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
    },

    {
      path: '/bookshelf',
      component: () => import('../views/BookshelfView.vue'),
      children: [
        {
          path: '/user/collection',
          name: 'userCollection',
          component: () => import('../views/CollectionView.vue')
        },
        {
          path: '/user/history',
          name: 'userHistory',
          component: () => import('../components/user/history.vue')
        }
      ]
    },

    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/ForgotView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/:id(\\d+)',
      name: 'novel',
      component: () => import('../views/NovelView.vue')
    },

    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
});

export default router;
