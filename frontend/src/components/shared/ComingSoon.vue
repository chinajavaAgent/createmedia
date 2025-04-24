<template>
  <div class="flex flex-col items-center justify-center px-4 py-16 md:py-24">
    <div class="relative">
      <!-- 装饰背景图形 -->
      <div class="absolute -top-10 -left-10 h-40 w-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div class="absolute -bottom-10 -right-10 h-40 w-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <!-- 主内容 -->
      <div class="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-xl p-8 md:p-10 max-w-2xl mx-auto">
        <div class="flex flex-col items-center text-center">
          <!-- 图标 -->
          <div class="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <!-- 标题 -->
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ title }}</h1>
          
          <!-- 说明文字 -->
          <p class="text-lg text-gray-600 mb-8">{{ description }}</p>
          
          <!-- 进度条 -->
          <div class="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
            <div class="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
          </div>
          
          <!-- 进度说明 -->
          <p class="text-sm font-medium text-gray-500 mb-8">开发进度: {{ progress }}%</p>
          
          <!-- 按钮 -->
          <div class="flex space-x-4">
            <router-link :to="backLink" class="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              {{ backText }}
            </router-link>
            <a href="#" @click.prevent="notify" class="btn bg-primary-600 text-white hover:bg-primary-700">
              开发完成提醒我
            </a>
          </div>
          
          <!-- 装饰元素 -->
          <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10"></div>
          
          <!-- 其他可用功能 -->
          <div v-if="alternatives && alternatives.length > 0">
            <h3 class="text-lg font-medium text-gray-900 mb-4">同时，您可以尝试这些功能：</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <router-link 
                v-for="(item, index) in alternatives" 
                :key="index" 
                :to="item.link" 
                class="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
              >
                <div class="flex-shrink-0 h-10 w-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-primary-200">
                  <component :is="item.icon" class="h-5 w-5 text-primary-600"></component>
                </div>
                <div class="ml-4">
                  <span class="text-sm font-medium text-gray-900">{{ item.text }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '功能开发中'
  },
  description: {
    type: String,
    default: '我们正在努力开发这个功能，很快就会与您见面'
  },
  progress: {
    type: Number,
    default: 30
  },
  backLink: {
    type: String,
    default: '/'
  },
  backText: {
    type: String,
    default: '返回首页'
  },
  alternatives: {
    type: Array,
    default: () => []
  }
});

const notify = () => {
  alert('感谢您的关注！功能完成后我们会通知您。');
};
</script> 