import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Category from '../views/CategoryView.vue';

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

    // { path: "/category", redirect: "/category/theme" },
    {
      path: '/category',
      name: 'category',
      component: Category,
      children: [
        {
          path: 'progress',
          // name: 'categoryProgress',
          component: () => import('../component/user/CategoryProgressPage.vue'),
        },
        {
          path: 'masses',
          // name: 'categoryMasses',
          component: () => import('../component/user/CategoryMassesPage.vue'),
        },
        {
          path: 'attribute',
          // name: 'categoryAttribute',
          component: () => import('../component/user/CategoryAttributePage.vue'),
        },
        {
          path: '/category/theme/:themeId(\\d+)',
          component: () => import('../views/themeView.vue')
        },
      ]
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
