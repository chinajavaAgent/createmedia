<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- 装饰元素 -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>
    <div class="absolute top-20 left-10 w-40 h-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute top-40 right-10 w-36 h-36 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2s"></div>
    <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4s"></div>
    
    <div class="max-w-md w-full relative">
      <div class="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <div class="mb-10 text-center">
          <div class="inline-block bg-primary-100 text-primary-800 p-3 rounded-xl mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">欢迎回来</h2>
          <p class="text-gray-600 text-sm">
            登录到爆款内容研创平台，开启您的创作之旅
          </p>
        </div>
        
        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- 邮箱输入框 -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700">邮箱地址</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input 
                id="email" 
                name="email" 
                type="email" 
                v-model="email"
                required 
                class="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gray-900" 
                placeholder="your@email.com" 
              />
            </div>
          </div>
          
          <!-- 密码输入框 -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                v-model="password"
                required 
                class="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 transition-colors text-gray-900" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                v-model="rememberMe"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" 
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                记住我
              </label>
            </div>

            <div class="text-sm">
              <router-link to="/forgot-password" class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                忘记密码?
              </router-link>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg hover:shadow-xl transition-all"
              :disabled="loading"
            >
              <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Loading spinner -->
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              <span class="absolute left-0 inset-y-0 flex items-center pl-3" v-else>
                <svg class="h-5 w-5 text-primary-400 group-hover:text-primary-300 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              {{ loading ? '登录中...' : '登录' }}
            </button>
          </div>
          
          <!-- 错误提示 -->
          <div v-if="error" class="p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {{ error }}
            </div>
          </div>
        </form>
        
        <div class="mt-8 pt-6 border-t border-gray-200 text-center">
          <p class="text-sm text-gray-600">
            还没有账户?
            <router-link to="/register" class="font-medium text-primary-600 hover:text-primary-500 transition-colors">
              立即注册
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

// 表单数据
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// 状态
const loading = ref(false);
const error = ref('');

// 登录处理
const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const success = await authStore.login({
      email: email.value,
      password: password.value,
      remember: rememberMe.value
    });
    
    if (success) {
      // 重定向到之前尝试访问的页面，或默认到仪表盘
      const redirectPath = route.query.redirect || '/dashboard';
      router.push(redirectPath);
    } else {
      error.value = authStore.error || '登录失败，请检查您的凭证';
    }
  } catch (err) {
    error.value = '登录过程中发生错误，请稍后重试';
    console.error('登录错误:', err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10px, 10px) scale(1.05);
  }
  50% {
    transform: translate(0, 20px) scale(1);
  }
  75% {
    transform: translate(-10px, 10px) scale(0.95);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2s {
  animation-delay: 2s;
}

.animation-delay-4s {
  animation-delay: 4s;
}
</style> 