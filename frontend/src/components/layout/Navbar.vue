<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- 左侧Logo和主菜单 -->
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-xl font-bold text-primary-600">
              爆款内容研创平台
            </router-link>
          </div>
          
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link 
              v-for="item in mainMenuItems" 
              :key="item.path" 
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[$route.path.startsWith(item.path) ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        
        <!-- 右侧用户菜单 -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <template v-if="isAuthenticated">
            <!-- 通知图标 -->
            <button class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <span class="sr-only">查看通知</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            <!-- 用户下拉菜单 -->
            <div class="ml-3 relative">
              <div>
                <button @click="isUserMenuOpen = !isUserMenuOpen" type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" id="user-menu-button">
                  <span class="sr-only">打开用户菜单</span>
                  <img class="h-8 w-8 rounded-full" :src="userAvatar" alt="用户头像">
                </button>
              </div>
              
              <div v-if="isUserMenuOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <router-link v-for="item in userMenuItems" :key="item.name" :to="item.path" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {{ item.name }}
                </router-link>
                <button @click="logout" class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  退出登录
                </button>
              </div>
            </div>
          </template>
          
          <template v-else>
            <router-link to="/login" class="text-gray-500 hover:text-gray-700 px-3 py-2">登录</router-link>
            <router-link to="/register" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
              注册
            </router-link>
          </template>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
            <span class="sr-only">{{ isMobileMenuOpen ? '关闭主菜单' : '打开主菜单' }}</span>
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in mainMenuItems"
          :key="item.path"
          :to="item.path"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="[$route.path.startsWith(item.path) ? 'border-primary-500 text-primary-700 bg-primary-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800']"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
      
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div v-if="isAuthenticated" class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="userAvatar" alt="用户头像">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ userName }}</div>
            <div class="text-sm font-medium text-gray-500">{{ userEmail }}</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <template v-if="isAuthenticated">
            <router-link
              v-for="item in userMenuItems"
              :key="item.name"
              :to="item.path"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
            <button 
              @click="logout" 
              class="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              退出登录
            </button>
          </template>
          <template v-else>
            <router-link 
              to="/login"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              @click="isMobileMenuOpen = false"
            >
              登录
            </router-link>
            <router-link 
              to="/register"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              @click="isMobileMenuOpen = false"
            >
              注册
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

// 菜单显示状态
const isMobileMenuOpen = ref(false);
const isUserMenuOpen = ref(false);

// 监听路由变化，关闭移动端菜单
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
  isUserMenuOpen.value = false;
});

// 登录状态
const isAuthenticated = computed(() => authStore.isAuthenticated);

// 用户信息
const userName = computed(() => authStore.user?.name || '用户');
const userEmail = computed(() => authStore.user?.email || '');
const userAvatar = computed(() => authStore.user?.avatar || 'https://via.placeholder.com/40');

// 获取用户信息
onMounted(() => {
  if (isAuthenticated.value) {
    authStore.fetchUserProfile();
  }
});

// 主菜单项
const mainMenuItems = [
  { name: '首页', path: '/' },
  { name: '内容发现', path: '/content' },
  { name: 'SOP流程', path: '/sop' },
  { name: '自定义SOP', path: '/custom-sop' },
  { name: '创作项目', path: '/projects' },
  { name: '社区', path: '/community' }
];

// 用户菜单项
const userMenuItems = [
  { name: '个人中心', path: '/dashboard' },
  { name: '个人设置', path: '/profile' },
  { name: '数据分析', path: '/analytics' }
];

// 登出
const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script> 