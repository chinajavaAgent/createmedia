<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2" v-for="item in footerNavigation" :key="item.name">
          <a :href="item.href" class="text-base text-gray-300 hover:text-white">
            {{ item.name }}
          </a>
        </div>
      </nav>
      
      <div class="mt-8 flex justify-center space-x-6">
        <a v-for="item in socialLinks" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; {{ currentYear }} 爆款内容研创平台. 版权所有.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

// 页脚导航
const footerNavigation = [
  { name: '关于我们', href: '#' },
  { name: '使用指南', href: '#' },
  { name: '定价', href: '#' },
  { name: 'API文档', href: '#' },
  { name: '联系支持', href: '#' },
  { name: '隐私政策', href: '#' },
  { name: '服务条款', href: '#' }
];

// 社交媒体链接
const socialLinks = [
  {
    name: '微信',
    href: '#',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.51,14.63L8.51,14.63c-0.52,0-0.94-0.42-0.94-0.94s0.42-0.94,0.94-0.94s0.94,0.42,0.94,0.94S9.03,14.63,8.51,14.63 M12.03,11.9c0-0.52,0.42-0.94,0.94-0.94s0.94,0.42,0.94,0.94s-0.42,0.94-0.94,0.94S12.03,12.42,12.03,11.9 M15.09,14.63L15.09,14.63c-0.52,0-0.94-0.42-0.94-0.94s0.42-0.94,0.94-0.94s0.94,0.42,0.94,0.94S15.61,14.63,15.09,14.63 M19.5,13.27L19.5,13.27c0-0.3-0.07-0.58-0.19-0.83l-0.01-0.04c-0.47-0.99-1.61-1.68-2.9-1.68c-0.55,0-1.08,0.14-1.54,0.39c-0.15,0.08-0.31,0.18-0.47,0.29c-0.55,0.38-0.88,0.65-1.36,0.65c-0.45,0-0.65-0.11-1.17-0.46l-0.19-0.13c-0.41-0.26-0.88-0.4-1.37-0.4c-1.31,0-2.37,0.9-2.44,2.04c-0.01,0.15-0.01,0.3,0.01,0.46c0.1,0.86,0.56,1.62,1.22,2.1c0.53,0.39,1.17,0.61,1.86,0.61c0.28,0,0.55-0.04,0.81-0.11c0.76-0.21,1.4-0.73,1.8-1.39C14.81,16.42,16.54,17.5,18.5,17.5c1.74,0,3.41-0.81,4.5-2.17C21.79,15.1,20.7,14.41,19.5,13.27 M24,12c0,6.63-5.37,12-12,12S0,18.63,0,12S5.37,0,12,0S24,5.37,24,12 M12,2.14c-5.44,0-9.86,4.42-9.86,9.86c0,5.44,4.42,9.86,9.86,9.86c5.44,0,9.86-4.42,9.86-9.86C21.86,6.56,17.44,2.14,12,2.14"></path>
        </svg>
      `
    }
  },
  {
    name: '微博',
    href: '#',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.098 20c-3.909 0-7.098-1.838-7.098-4.106 0-1.184 0.651-2.564 1.732-3.914C5.929 10.328 7.7 9.067 8.478 8.86c0.316-0.082 0.553-0.105 0.665-0.105 0.118 0 0.177 0.066 0.177 0.157 0 0.082-0.016 0.111-0.453 0.389-1.247 0.768-2.986 2.395-2.986 4.223 0 1.983 2.109 3.425 4.982 3.425 2.955 0 5.235-1.607 5.235-3.688 0-1.167-0.729-1.834-1.889-2.66-1.652-1.156-1.83-1.321-1.83-1.663 0-0.278 0.295-0.631 0.787-0.631 0.202 0 0.521 0.059 0.85 0.142 1.106 0.31 2.106 0.922 2.758 1.677C17.824 11.078 18.12 12.08 18.12 13.071 18.12 16.687 14.776 20 10.098 20M20.54 9.846c-0.842-0.916-2.082-1.424-3.244-1.424-0.192 0-0.35 0.151-0.35 0.339 0 0.186 0.158 0.335 0.35 0.335 0.909 0 1.901 0.367 2.567 1.091C20.527 10.783 20.9 11.808 20.9 12.896c0 0.188 0.15 0.334 0.35 0.334 0.198 0 0.35-0.147 0.35-0.334C21.601 11.594 21.197 10.567 20.54 9.846M17.714 10.072c-0.41-0.445-1.013-0.692-1.578-0.692-0.163 0-0.29 0.126-0.29 0.284 0 0.156 0.127 0.286 0.29 0.286 0.407 0 0.85 0.172 1.147 0.5 0.307 0.317 0.45 0.771 0.45 1.213 0 0.157 0.127 0.285 0.29 0.285 0.162 0 0.29-0.128 0.29-0.285 0-0.588-0.182-1.153-0.599-1.591M14.088 12.713c-0.134-0.064-0.229-0.108-0.156-0.353 0.15-0.556 0.164-1.035 0.003-1.377-0.304-0.644-1.144-0.61-2.104-0.016 0 0-0.302 0.135-0.224-0.11 0.148-0.486 0.126-0.895-0.106-1.129-0.517-0.519-1.889 0.021-3.067 1.205-0.881 0.886-1.391 1.829-1.391 2.642 0 1.559 1.956 2.503 3.866 2.503 2.506 0 4.174-1.484 4.174-2.666 0-0.712-0.585-1.114-0.996-1.299M11.033 16.42c-1.528 0.152-2.846-0.548-2.95-1.561-0.101-1.016 1.06-1.962 2.587-2.114 1.528-0.155 2.846 0.543 2.95 1.559 0.104 1.016-1.058 1.963-2.587 2.116M10.088 13.392c-0.511 0-0.924 0.296-0.924 0.662 0 0.363 0.413 0.662 0.924 0.662 0.513 0 0.926-0.299 0.926-0.662 0-0.366-0.413-0.662-0.926-0.662M11.415 14.696c-0.172 0-0.312 0.103-0.312 0.23 0 0.125 0.14 0.229 0.312 0.229 0.175 0 0.317-0.104 0.317-0.229 0-0.127-0.142-0.23-0.317-0.23M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9.002a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 4.5 6z"></path>
        </svg>
      `
    }
  },
  {
    name: 'GitHub',
    href: '#',
    icon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      `
    }
  }
];

// 当前年份
const currentYear = computed(() => new Date().getFullYear());
</script> 