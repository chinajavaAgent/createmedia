<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">重置密码</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          输入您的邮箱，我们将发送重置密码的链接
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handlePasswordReset">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">邮箱地址</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              v-model="email"
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="邮箱地址" 
            />
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
              <svg class="h-5 w-5 text-primary-500 group-hover:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            发送重置链接
          </button>
        </div>
      </form>
      
      <!-- 成功提示 -->
      <div v-if="success" class="mt-3 text-center text-sm text-green-600">
        {{ success }}
      </div>
      
      <!-- 错误提示 -->
      <div v-if="error" class="mt-3 text-center text-sm text-red-600">
        {{ error }}
      </div>
      
      <div class="text-center mt-4">
        <router-link to="/login" class="font-medium text-primary-600 hover:text-primary-500">
          返回登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();

// 表单数据
const email = ref('');

// 状态
const loading = ref(false);
const error = ref('');
const success = ref('');

// 处理密码重置请求
const handlePasswordReset = async () => {
  loading.value = true;
  error.value = '';
  success.value = '';
  
  try {
    const result = await authStore.forgotPassword(email.value);
    
    if (result) {
      success.value = '重置链接已发送到您的邮箱，请查收';
      email.value = ''; // 清空表单
    } else {
      error.value = authStore.error || '发送重置链接失败，请检查您的邮箱地址';
    }
  } catch (err) {
    error.value = '发送过程中出现错误，请稍后重试';
    console.error('密码重置错误:', err);
  } finally {
    loading.value = false;
  }
};
</script> 