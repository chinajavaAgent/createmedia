<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">设置新密码</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          请输入您的新密码
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleResetPassword">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="password" class="sr-only">新密码</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              v-model="password"
              class="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="新密码" 
            />
          </div>
          <div>
            <label for="password-confirmation" class="sr-only">确认密码</label>
            <input 
              id="password-confirmation" 
              name="passwordConfirmation" 
              type="password" 
              required 
              v-model="passwordConfirmation"
              class="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="确认密码" 
            />
          </div>
        </div>

        <div v-if="!passwordsMatch && passwordConfirmation" class="text-sm text-red-600">
          两次输入的密码不一致
        </div>

        <div>
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            :disabled="loading || !passwordsMatch"
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
            重置密码
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
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

// 获取URL中的重置令牌
const token = ref('');

onMounted(() => {
  token.value = route.query.token;
  
  if (!token.value) {
    error.value = '无效的重置链接';
  }
});

// 表单数据
const password = ref('');
const passwordConfirmation = ref('');

// 状态
const loading = ref(false);
const error = ref('');
const success = ref('');

// 计算属性检查密码是否匹配
const passwordsMatch = computed(() => {
  return password.value === passwordConfirmation.value;
});

// 处理密码重置
const handleResetPassword = async () => {
  if (!passwordsMatch.value) {
    return;
  }
  
  loading.value = true;
  error.value = '';
  success.value = '';
  
  try {
    const result = await authStore.resetPassword({
      token: token.value,
      password: password.value
    });
    
    if (result) {
      success.value = '密码重置成功！';
      
      // 清空表单
      password.value = '';
      passwordConfirmation.value = '';
      
      // 3秒后重定向到登录页
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } else {
      error.value = authStore.error || '密码重置失败，请重试或请求新的重置链接';
    }
  } catch (err) {
    error.value = '重置过程中出现错误，请稍后重试';
    console.error('密码重置错误:', err);
  } finally {
    loading.value = false;
  }
};
</script> 