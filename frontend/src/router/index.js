import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('@/views/content/ContentList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/content/:id',
    name: 'content-detail',
    component: () => import('@/views/content/ContentDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sop',
    name: 'sop',
    component: () => import('@/views/sop/SopList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sop/:id',
    name: 'sop-detail',
    component: () => import('@/views/sop/SopDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/custom-sop',
    name: 'custom-sop',
    component: () => import('@/views/sop/CustomSopList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/custom-sop/create',
    name: 'custom-sop-create',
    component: () => import('@/views/sop/CustomSopCreate.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/custom-sop/:id',
    name: 'custom-sop-detail',
    component: () => import('@/views/sop/CustomSopDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/english-sop',
    name: 'english-sop',
    component: () => import('@/views/sop/templates/EnglishSop.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/projects/ProjectList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('@/views/projects/ProjectDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('@/views/analytics/Analytics.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/user/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/community/Community.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫检查认证状态
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
})

export default router 