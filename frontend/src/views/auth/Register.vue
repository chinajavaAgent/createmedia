<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">创建新账户</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          或
          <router-link to="/login" class="font-medium text-primary-600 hover:text-primary-500">
            登录到现有账户
          </router-link>
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm space-y-3">
          <div>
            <label for="name" class="sr-only">姓名</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              v-model="name"
              required 
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="姓名" 
            />
          </div>
          <div>
            <label for="email" class="sr-only">邮箱地址</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              v-model="email"
              required 
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="邮箱地址" 
            />
          </div>
          <div>
            <label for="password" class="sr-only">密码</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              v-model="password"
              required 
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="密码" 
            />
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">确认密码</label>
            <input 
              id="password_confirmation" 
              name="password_confirmation" 
              type="password" 
              v-model="passwordConfirmation"
              required 
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" 
              placeholder="确认密码" 
            />
          </div>
        </div>

        <div class="flex items-center">
          <input 
            id="terms" 
            name="terms" 
            type="checkbox" 
            v-model="agreeToTerms"
            required
            class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" 
          />
          <label for="terms" class="ml-2 block text-sm text-gray-900">
            我同意
            <a href="#" class="text-primary-600 hover:text-primary-500">服务条款</a>
            和
            <a href="#" class="text-primary-600 hover:text-primary-500">隐私政策</a>
          </label>
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
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            注册
          </button>
        </div>
      </form>
      
      <!-- 密码不匹配警告 -->
      <div v-if="password && passwordConfirmation && !passwordsMatch" class="mt-1 text-center text-sm text-red-600">
        密码不匹配
      </div>
      
      <!-- 错误提示 -->
      <div v-if="error" class="mt-3 text-center text-sm text-red-600">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();

// 表单数据
const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const agreeToTerms = ref(false);

// 状态
const loading = ref(false);
const error = ref('');

// 计算属性 - 检查密码是否匹配
const passwordsMatch = computed(() => {
  if (!password.value || !passwordConfirmation.value) return true;
  return password.value === passwordConfirmation.value;
});

// 注册处理
const handleRegister = async () => {
  if (!passwordsMatch.value) {
    error.value = '密码不匹配';
    return;
  }
  
  loading.value = true;
  error.value = '';
  
  try {
    const success = await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value
    });
    
    if (success) {
      // 注册成功后重定向到仪表盘或欢迎页面
      router.push('/dashboard');
    } else {
      error.value = authStore.error || '注册失败，请检查您的信息';
    }
  } catch (err) {
    error.value = '注册过程中发生错误，请稍后重试';
    console.error('注册错误:', err);
  } finally {
    loading.value = false;
  }
};
</script> 