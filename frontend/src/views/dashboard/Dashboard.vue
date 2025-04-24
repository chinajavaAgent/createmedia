<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- 顶部状态栏 -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">仪表盘</h1>
          <div class="flex items-center space-x-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span class="h-2 w-2 mr-1 bg-green-500 rounded-full"></span>
              系统正常
            </span>
            <button class="btn btn-sm btn-outline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              刷新
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- 欢迎消息 -->
      <div class="mb-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl shadow-lg overflow-hidden">
        <div class="md:flex items-center justify-between">
          <div class="p-6 md:p-8">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-2">欢迎回来！</h2>
            <p class="text-primary-100 mb-4">今天是个创作的好日子，让我们开始吧！</p>
            <div class="flex space-x-3">
              <router-link to="/content" class="btn bg-white text-primary-700 hover:bg-primary-50 shadow-md">
                浏览内容
              </router-link>
              <router-link to="/custom-sop/create" class="btn bg-primary-500 text-white border border-primary-400 hover:bg-primary-700">
                创建SOP
              </router-link>
            </div>
          </div>
          <div class="hidden md:block p-6">
            <div class="bg-primary-500/20 backdrop-blur-sm p-4 rounded-xl border border-primary-300/30">
              <div class="text-white text-center">
                <div class="text-4xl font-bold mb-1">28天</div>
                <div class="text-primary-100 text-sm">连续创作</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-primary-900/20 backdrop-blur-sm py-3 px-8">
          <div class="flex items-center justify-between text-sm">
            <div class="text-primary-100">上次登录: 今天 08:42</div>
            <div class="text-primary-100">创作平台版本: 1.0.0</div>
          </div>
        </div>
      </div>
      
      <!-- 统计卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 transform transition-all hover:shadow-lg hover:-translate-y-1">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-600 mb-1">我的内容</h3>
              <p class="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div class="bg-blue-100 p-3 rounded-lg text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-gray-500">较昨日</span>
            <span class="ml-1 text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>0%</span>
            </span>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 transform transition-all hover:shadow-lg hover:-translate-y-1">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-600 mb-1">我的SOP</h3>
              <p class="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div class="bg-purple-100 p-3 rounded-lg text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-gray-500">较昨日</span>
            <span class="ml-1 text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>0%</span>
            </span>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 transform transition-all hover:shadow-lg hover:-translate-y-1">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-600 mb-1">我的项目</h3>
              <p class="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div class="bg-amber-100 p-3 rounded-lg text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-gray-500">较昨日</span>
            <span class="ml-1 text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>0%</span>
            </span>
          </div>
        </div>
      </div>
      
      <!-- 活动和快速访问 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 最近活动 -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">最近活动</h3>
            <button class="text-sm text-primary-600 hover:text-primary-700">查看全部</button>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-gray-500">
              暂无活动记录
            </div>
          </div>
        </div>
        
        <!-- 快速访问 -->
        <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div class="border-b border-gray-200 px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-900">快速访问</h3>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3">
              <router-link to="/english-sop" class="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 text-center">英语SOP</span>
              </router-link>
              
              <router-link to="/content" class="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div class="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 text-center">浏览内容</span>
              </router-link>
              
              <router-link to="/custom-sop/create" class="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 text-center">创建SOP</span>
              </router-link>
              
              <router-link to="/analytics" class="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div class="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span class="text-sm text-gray-600 text-center">数据分析</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 推荐模板 -->
      <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden mb-8">
        <div class="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">推荐模板</h3>
          <router-link to="/custom-sop" class="text-sm text-primary-600 hover:text-primary-700">查看全部</router-link>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-md font-medium text-gray-900">英语学习视频流程</h4>
                  <p class="text-sm text-gray-500 mt-1">专为英语教学视频设计的内容创作流程</p>
                  <router-link to="/english-sop" class="mt-2 inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700">
                    查看详情
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-pink-100 p-2 rounded-lg text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-md font-medium text-gray-900">美食探店vlog</h4>
                  <p class="text-sm text-gray-500 mt-1">餐厅探店视频拍摄与剪辑流程</p>
                  <router-link to="/custom-sop" class="mt-2 inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700">
                    查看详情
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-purple-100 p-2 rounded-lg text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-md font-medium text-gray-900">产品开箱测评</h4>
                  <p class="text-sm text-gray-500 mt-1">电子产品开箱与评测视频流程</p>
                  <router-link to="/custom-sop" class="mt-2 inline-flex items-center text-xs font-medium text-primary-600 hover:text-primary-700">
                    查看详情
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 仪表盘脚本在这里
</script> 