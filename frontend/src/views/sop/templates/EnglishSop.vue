<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900">英语学习视频创作流程 (SOP)</h1>
      <div>
        <button 
          @click="useSopTemplate" 
          class="btn btn-primary mr-3"
          :disabled="loading"
        >
          {{ loading ? '处理中...' : '使用此模板' }}
        </button>
        <button 
          @click="goBack" 
          class="btn btn-outline"
        >
          返回
        </button>
      </div>
    </div>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div class="px-4 py-5 sm:px-6 bg-primary-50">
        <h2 class="text-xl font-semibold text-gray-900">模板概览</h2>
        <p class="mt-1 max-w-2xl text-sm text-gray-600">专为英语学习视频内容创作者设计的标准操作流程</p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">适用场景</h3>
          <div class="text-gray-600 space-y-1">
            <p>• 英语词汇/语法教学</p>
            <p>• 口语表达技巧</p>
            <p>• 听力理解训练</p>
            <p>• 考试备考指导</p>
            <p>• 日常英语情景对话</p>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">创作周期</h3>
          <p class="text-gray-600">从规划到发布约需2-3天，视频时长建议3-8分钟</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">预期效果</h3>
          <div class="text-gray-600 space-y-1">
            <p>• 平均完播率: 60-70%</p>
            <p>• 评论互动率: 3-5%</p>
            <p>• 学习内容留存率: 提高30%以上</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- SOP详细步骤 -->
    <div class="space-y-8">
      <div v-for="(step, index) in sopSteps" :key="index" class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6" :class="stepHeaderColor(index)">
          <h2 class="text-xl font-semibold text-gray-900">步骤{{ index + 1 }}: {{ step.title }}</h2>
          <p class="mt-1 max-w-2xl text-sm text-gray-600">{{ step.description }}</p>
          <div v-if="step.timeEstimate" class="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <svg class="mr-1.5 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            预计用时: {{ step.timeEstimate }}
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
          <ul class="space-y-4">
            <li v-for="(item, itemIndex) in step.items" :key="itemIndex" class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 text-primary-600">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3 text-sm">
                <div class="font-medium text-gray-900">{{ item.title }}</div>
                <div class="mt-1 text-gray-600">{{ item.description }}</div>
                <div v-if="item.tips" class="mt-2 text-sm bg-yellow-50 p-3 rounded-md border border-yellow-100">
                  <span class="font-medium text-yellow-800">提示：</span> {{ item.tips }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCustomSopStore } from '@/store/custom-sop';

const router = useRouter();
const customSopStore = useCustomSopStore();
const loading = ref(false);

// 步骤标题背景颜色
const stepHeaderColor = (index) => {
  const colors = [
    'bg-blue-50', 'bg-purple-50', 'bg-green-50', 
    'bg-yellow-50', 'bg-pink-50', 'bg-indigo-50'
  ];
  return colors[index % colors.length];
};

// 返回上一页
const goBack = () => {
  router.back();
};

// 使用此模板
const useSopTemplate = async () => {
  loading.value = true;
  try {
    const newSop = {
      title: '英语学习视频创作流程',
      description: '专为英语学习内容创作者设计的标准操作流程，帮助创作高质量的英语教学视频',
      categoryId: 'education',
      steps: sopSteps.map(step => ({
        title: step.title,
        description: step.description,
        timeEstimate: step.timeEstimate,
        items: step.items.map(item => ({
          title: item.title,
          description: item.description,
          tips: item.tips
        }))
      }))
    };
    
    const result = await customSopStore.createCustomSop(newSop);
    router.push(`/custom-sop/${result._id}`);
  } catch (error) {
    console.error('创建SOP模板失败:', error);
    alert('创建SOP模板失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};

// 英语学习视频SOP步骤
const sopSteps = [
  {
    title: '前期准备',
    description: '确定视频主题和目标受众',
    timeEstimate: '2-3小时',
    items: [
      {
        title: '目标听众定位',
        description: '确定视频针对的英语学习者级别（初级、中级、高级）和年龄段',
        tips: '明确的受众定位有助于调整内容难度和表达方式，提高内容相关性'
      },
      {
        title: '学习难度等级设置',
        description: '根据目标受众设定内容难度，确保既有挑战性又不至于过难',
        tips: '可参考CEFR标准（A1-C2）设置内容难度，并在视频开头明确说明'
      },
      {
        title: '核心词汇/语法点准备',
        description: '选择5-10个核心词汇或1-2个语法点作为视频重点',
        tips: '核心内容不宜过多，集中讲解少量内容效果更佳'
      },
      {
        title: '参考教材/资料收集',
        description: '收集可靠的教学资料和例句，确保内容准确性',
        tips: '建议使用权威字典和语料库，避免使用网络上不准确的英语表达'
      }
    ]
  },
  {
    title: '内容结构设计',
    description: '规划视频的整体结构和各部分时长',
    timeEstimate: '2-4小时',
    items: [
      {
        title: '开场白设计 (5-10秒)',
        description: '简短有力的开场白，引起观众兴趣',
        tips: '可使用问题引导或日常情景导入，避免长时间自我介绍'
      },
      {
        title: '学习目标简介 (10-30秒)',
        description: '明确说明本次视频将学到什么，以及学习后能达到什么效果',
        tips: '强调实用性和应用场景，增加学习动力'
      },
      {
        title: '核心内容讲解 (3-5分钟)',
        description: '详细讲解核心词汇或语法点，包括发音、用法和常见错误',
        tips: '使用思维导图或分类法组织内容，便于观众理解和记忆'
      },
      {
        title: '实用场景演示 (1-2分钟)',
        description: '展示核心内容在实际对话或场景中的应用',
        tips: '情景演示最好包含视觉元素，如角色扮演或动画演示'
      },
      {
        title: '互动问题设置 (30秒)',
        description: '设计1-2个问题供观众在评论区回答，增加互动性',
        tips: '问题既要与内容相关，也要有一定趣味性，鼓励观众参与'
      },
      {
        title: '总结与下期预告 (30秒)',
        description: '总结本期内容要点，并简要预告下期内容',
        tips: '可以设计记忆口诀帮助观众记忆核心内容'
      }
    ]
  },
  {
    title: '拍摄准备',
    description: '准备拍摄所需的场景和设备',
    timeEstimate: '2-3小时',
    items: [
      {
        title: '场景布置清单',
        description: '准备整洁、简约的拍摄背景，避免杂乱和过多装饰',
        tips: '书架、绿植或简单的装饰墙是理想的背景，避免强烈的图案和过亮颜色'
      },
      {
        title: '辅助道具准备',
        description: '准备白板、单词卡、实物道具等辅助教学的工具',
        tips: '手写板书比电子文字更能吸引注意力，可适当准备颜色笔增强视觉效果'
      },
      {
        title: '服装与妆容建议',
        description: '选择简洁、专业的服装，避免过于花哨或休闲的装扮',
        tips: '浅色系上衣搭配简单妆容，避免佩戴过多饰品干扰注意力'
      },
      {
        title: '录音设备调试',
        description: '确保麦克风音质清晰，消除背景噪音',
        tips: '使用领夹式麦克风效果更佳，提前测试音量和音质'
      }
    ]
  },
  {
    title: '拍摄技巧',
    description: '提高视频拍摄的专业性和观感',
    timeEstimate: '1-2小时',
    items: [
      {
        title: '镜头角度建议',
        description: '保持摄像机在眼睛略高的位置，确保视线自然',
        tips: '可使用三脚架固定摄像机，保持画面稳定'
      },
      {
        title: '光线调整方法',
        description: '确保面部光线充足均匀，避免背光或强光',
        tips: '自然光最佳，如使用人工光源，可使用柔光灯或反光板调整'
      },
      {
        title: '发音清晰度技巧',
        description: '放慢语速，注重单词发音准确性和句子抑扬顿挫',
        tips: '教学难点处可稍微放慢语速并夸张口型，帮助观众模仿'
      },
      {
        title: '肢体语言指导',
        description: '使用适当的手势辅助讲解，增强表达力',
        tips: '手势要自然得体，避免过度频繁的动作干扰观众注意力'
      }
    ]
  },
  {
    title: '后期制作',
    description: '视频剪辑和效果添加',
    timeEstimate: '4-6小时',
    items: [
      {
        title: '片头模板选择',
        description: '制作简洁、专业的片头，时长控制在5秒以内',
        tips: '保持片头风格一致，形成个人品牌识别'
      },
      {
        title: '字幕添加（双语对照）',
        description: '为所有英语内容添加中英文对照字幕，帮助理解',
        tips: '字幕字体选择清晰易读，英文建议使用白色，中文可使用浅黄色区分'
      },
      {
        title: '关键词突出显示',
        description: '在讲解核心词汇时使用文字特效突出显示',
        tips: '可使用放大、高亮或动画效果强调重点词汇'
      },
      {
        title: '配乐选择建议',
        description: '选择轻柔、不喧宾夺主的背景音乐',
        tips: '音量控制在说话声音的15-20%，确保不影响讲解内容'
      },
      {
        title: '转场效果推荐',
        description: '使用简单过渡效果连接不同场景',
        tips: '淡入淡出和简单滑动效果最为适合教学视频，避免花哨效果'
      }
    ]
  },
  {
    title: '优化与发布',
    description: '优化视频表现并选择合适时间发布',
    timeEstimate: '1-2小时',
    items: [
      {
        title: '标题优化公式',
        description: '标题包含核心关键词+学习效果+吸引点',
        tips: '例如：「5分钟掌握10个职场英语表达 | 让你在会议中脱颖而出」'
      },
      {
        title: '缩略图设计建议',
        description: '制作高对比度、文字清晰的缩略图',
        tips: '在缩略图中展示核心词汇或短语，搭配表情丰富的人物形象'
      },
      {
        title: '标签选择策略',
        description: '添加英语学习、教育类相关标签，以及具体内容标签',
        tips: '包含难度级别、英语类型（口语/听力/语法等）和适用场景的标签'
      },
      {
        title: '最佳发布时间',
        description: '选择目标受众活跃时间段发布，如晚上7-10点或周末上午',
        tips: '可根据数据分析调整最佳发布时间，固定更新时间有助于培养观众习惯'
      },
      {
        title: '互动引导文案',
        description: '设计评论区引导文案，鼓励观众参与讨论',
        tips: '可设置学习打卡或问答环节，增加粉丝参与感'
      }
    ]
  }
];
</script> 