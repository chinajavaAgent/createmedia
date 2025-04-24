<template>
  <div>
    <!-- 英雄部分 -->
    <div class="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-10">
            <div class="relative">
              <span class="absolute -top-6 -left-6 text-5xl text-primary-400 opacity-20">❝</span>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative z-10">
                <span class="text-primary-200">爆款内容</span>研创平台
              </h1>
            </div>
            <p class="text-xl md:text-2xl mb-8 font-light">专业的自媒体内容创作辅助平台<br>让您<span class="font-semibold underline decoration-primary-300 decoration-2 underline-offset-4">轻松创作</span>优质内容</p>
            <div class="relative bg-primary-800/30 p-4 rounded-lg backdrop-blur-sm border border-primary-500/30 mb-8">
              <p class="text-primary-100">系统拆解爆款视频内容，提供标准创作流程，助您快速模仿与创新</p>
              <div class="absolute -right-2 -top-2 bg-primary-500 rounded-full px-2 py-1 text-xs font-semibold transform rotate-3 shadow-lg">
                AI 驱动
              </div>
            </div>
            <div class="flex flex-wrap gap-4">
              <router-link to="/register" class="btn bg-white text-primary-700 hover:bg-primary-50 shadow-lg shadow-primary-900/20 transform transition-transform hover:scale-105">
                免费注册
              </router-link>
              <router-link to="/content" class="btn bg-primary-500/70 text-white border border-primary-400 hover:bg-primary-700 backdrop-blur-sm transform transition-transform hover:scale-105">
                开始探索
              </router-link>
            </div>
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-xl transform rotate-3"></div>
            <img src="https://via.placeholder.com/600x400" alt="平台展示" class="rounded-lg shadow-2xl relative z-10 border border-primary-500/20">
            <div class="absolute -bottom-4 -right-4 bg-primary-300 h-20 w-20 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 特色功能 -->
    <div class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div class="absolute top-0 inset-x-0 h-40 bg-primary-900/5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">专业功能</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">特色功能</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">全方位助力自媒体内容创作的核心功能，<br>让您的创作流程更加高效专业</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div class="h-14 w-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-6 transform transition-transform group-hover:scale-110 shadow-lg">
              <component :is="feature.icon" class="h-7 w-7" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 如何工作 -->
    <div class="py-20 bg-gray-50 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">简单易用</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">如何工作</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">简单四步，助您打造爆款内容</p>
        </div>
        
        <div class="relative">
          <!-- 连接线 -->
          <div class="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 -translate-y-1/2"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div v-for="(step, index) in steps" :key="index" class="relative bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-xl">
              <!-- 步骤数字 -->
              <div class="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {{ index + 1 }}
              </div>
              
              <div class="mt-4">
                <h3 class="text-xl font-bold mb-3 text-gray-900">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 自定义SOP模板 -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">专业工具</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">精选SOP模板</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">各类内容创作的专业流程，让您的创作更有条理</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(template, index) in sopTemplates" :key="index" class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="h-3 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            <div class="p-8">
              <h3 class="text-xl font-bold mb-3 text-gray-900">{{ template.title }}</h3>
              <p class="text-gray-600 mb-4">{{ template.description }}</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ template.duration }}
                
                <span class="mx-2">•</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {{ template.steps }} 步骤
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="(tag, tagIndex) in template.tags" :key="tagIndex" class="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-lg font-medium">
                  {{ tag }}
                </span>
              </div>
              <router-link :to="template.path" class="block w-full text-center py-2.5 px-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md">
                查看详情
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/custom-sop" class="btn bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transform transition-transform hover:scale-105">
            查看全部模板
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- 用户评价 -->
    <div class="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">用户反馈</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">用户评价</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">听听他们怎么说</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
            <div class="absolute top-6 right-6 text-6xl text-primary-200 opacity-30 font-serif">"</div>
            <!-- 评分 -->
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" class="h-5 w-5" :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 mb-6 italic relative z-10">{{ testimonial.content }}</blockquote>
            
            <div class="flex items-center mt-8">
              <img :src="testimonial.avatar" alt="用户头像" class="h-12 w-12 rounded-full border-2 border-primary-100 mr-4 shadow">
              <div>
                <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-primary-600 text-sm">{{ testimonial.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA -->
    <div class="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="absolute bottom-0 left-0 w-full h-20 bg-white/5"></div>
      <div class="absolute top-0 right-0 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20 transform translate-x-20 -translate-y-20"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">准备好开始创作了吗？</h2>
        <p class="text-xl mb-10 max-w-3xl mx-auto font-light">立即加入爆款内容研创平台，开启高效创作之旅</p>
        <div class="flex flex-wrap justify-center gap-6">
          <router-link to="/register" class="btn bg-white text-primary-700 hover:bg-primary-50 shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105">
            免费注册
          </router-link>
          <router-link to="/content" class="btn bg-primary-600/80 text-white border border-primary-500/50 hover:bg-primary-600 backdrop-blur-sm shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105">
            开始探索
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 特色功能
const features = [
  {
    title: '爆款内容发现',
    description: '实时监控各大平台热门内容，智能分析用户偏好和平台算法',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      `
    }
  },
  {
    title: '内容智能拆解',
    description: '自动分析视频结构、情感调动、镜头语言等核心要素',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      `
    }
  },
  {
    title: 'SOP流程生成',
    description: '基于爆款内容分析，生成可执行的标准操作流程，简化创作过程',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      `
    }
  },
  {
    title: '自定义SOP模板',
    description: '提供各行业、各类型专业SOP模板，支持自定义创建专属流程',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      `
    }
  },
  {
    title: '创作辅助工具',
    description: '提供脚本生成、分镜头设计、素材管理等一站式创作辅助工具',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      `
    }
  },
  {
    title: '数据分析与优化',
    description: '追踪内容表现，提供A/B测试和优化建议，持续提升创作质量',
    icon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      `
    }
  }
];

// 使用步骤
const steps = [
  {
    title: '选择平台',
    description: '选择您关注的视频平台，如抖音、快手、B站等'
  },
  {
    title: '发现爆款',
    description: '浏览或搜索平台热门内容，找到感兴趣的爆款视频'
  },
  {
    title: '生成SOP',
    description: '一键分析爆款内容，生成详细的创作流程和要点'
  },
  {
    title: '创作执行',
    description: '按照SOP指引进行创作，发布您的内容并追踪效果'
  }
];

// SOP模板
const sopTemplates = [
  {
    title: '英语学习视频流程',
    description: '专为英语教学视频设计的内容创作流程，包含教学设计和拍摄技巧',
    duration: '2-3天',
    steps: 6,
    tags: ['教育', '英语', '教学'],
    path: '/english-sop'
  },
  {
    title: '美食探店vlog',
    description: '餐厅探店视频拍摄与剪辑流程，提升美食内容吸引力',
    duration: '1-2天',
    steps: 5,
    tags: ['美食', 'Vlog', '探店'],
    path: '/custom-sop'
  },
  {
    title: '产品开箱测评',
    description: '电子产品开箱与评测视频的专业创作流程',
    duration: '2天',
    steps: 7,
    tags: ['测评', '开箱', '电子产品'],
    path: '/custom-sop'
  }
];

// 用户评价
const testimonials = [
  {
    rating: 5,
    content: '平台的英语教学SOP模板让我的教学视频播放量提高了300%，互动率大幅增长，省去了我大量摸索时间。',
    name: '张老师',
    title: '英语教育创作者',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    rating: 5,
    content: '分析功能帮我精准把握平台热点，SOP指导让我轻松上手，新手也能快速掌握专业创作流程。',
    name: '李明',
    title: '自媒体新人',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    rating: 4,
    content: '自定义SOP功能特别实用，可以根据我的特定需求定制创作流程，团队协作效率提高了50%。',
    name: '王晓',
    title: '内容创业团队负责人',
    avatar: 'https://via.placeholder.com/150'
  }
];
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.bg-grid-pattern {
  background-size: 20px 20px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
}
</style> 