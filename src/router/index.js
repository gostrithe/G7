import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Category from '../views/CategoryView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          // component: () => import('../component/user/CategoryProgressPage.vue'),
          component: () => import('../views/Brank.vue'),
        },
        {
          path: 'masses',
          // name: 'categoryMasses',
          // component: () => import('../component/user/CategoryMassesPage.vue'),
          component: () => import('../views/Brank.vue'),
        },
        {
          path: 'attribute',
          // name: 'categoryAttribute',
          // component: () => import('../component/user/CategoryAttributePage.vue'),
          component: () => import('../views/Brank.vue'),
        },
        {
          path: '/category/theme/:themeId(\\d+)',
          component: () => import('../component/user/themeView.vue')
          // component: () => import('../views/Brank.vue'),
        },
      
       
      ]
    },
    {
      path: '/category/progress/:progressId(\\d+)',
      component: () => import('../component/user/ProgressView.vue')
    },
    {
      path: '/category/masses/:massesId(\\d+)',
      component: () => import('../component/user/MassesView.vue')
    },
    {
      path: '/category/attribute/:attributeId(\\d+)',
      component: () => import('../component/user/AttributeView.vue')
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
      component: () => import('../views/NovelView.vue'),
      children: [
        {
          path: '/:id(\\d+)/:chapterId(\\d+)',
          name: 'novelContent',
          component: () => import('../views/NovelContentView.vue')
        }
      ]
    },

    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
});

export default router;
