# 爆款内容研创平台 - 前端项目

这是爆款内容研创平台的前端项目，基于Vue 3 + TailwindCSS构建。

## 技术栈

- **Vue 3**: 使用Composition API构建响应式用户界面
- **Vue Router 4**: 实现客户端路由
- **Pinia**: 状态管理
- **TailwindCSS**: 实用优先的CSS框架
- **Vite**: 现代前端构建工具
- **Axios**: HTTP请求库
- **Chart.js**: 数据可视化
- **TipTap**: 富文本编辑器
- **Vue Draggable Next**: 拖拽排序

## 项目结构

```
frontend/
  ├── public/              # 静态资源
  ├── src/
  │   ├── api/            # API调用和HTTP配置
  │   ├── assets/         # 项目资源文件
  │   ├── components/     # 可复用组件
  │   │   ├── common/     # 通用组件
  │   │   ├── layout/     # 布局组件
  │   │   └── ...         # 其他组件
  │   ├── composables/    # 可复用的组合式函数
  │   ├── router/         # 路由配置
  │   ├── store/          # Pinia状态管理
  │   ├── styles/         # 全局样式
  │   ├── utils/          # 工具函数
  │   ├── views/          # 页面组件
  │   ├── App.vue         # 根组件
  │   └── main.js         # 入口文件
  ├── index.html          # HTML模板
  ├── vite.config.js      # Vite配置
  ├── tailwind.config.js  # TailwindCSS配置
  └── package.json        # 项目依赖
```

## 开发指南

### 安装依赖

```bash
cd frontend
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 代码检查和格式化

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 开发规范

### 组件命名

- 使用PascalCase命名组件文件和组件名称
- 基础组件使用"Base"前缀，如BaseButton.vue
- 页面级组件与路由路径一致

### CSS规范

- 使用TailwindCSS类优先
- 全局样式定义在`src/styles/index.css`
- 组件特定样式使用scoped CSS

### 状态管理

- 全局状态使用Pinia存储
- 组件内部状态使用ref/reactive
- 跨组件共享逻辑使用composables

## 主要功能

### 1. 用户认证

- 登录/注册
- 基于JWT的认证
- 用户资料管理

### 2. 内容发现与拆解

- 平台内容浏览
- 内容拆解分析
- 标签化管理

### 3. SOP管理

- SOP流程生成
- SOP模板库
- 步骤细化

### 4. 自定义SOP

- 创建自定义SOP
- 多种模板选择（特别是英语学习视频流程）
- 协作与分享

### 5. 数据分析

- 内容表现分析
- 图表可视化
- 优化建议

## API对接

前端通过`/api`前缀调用后端API，主要包括：

- 用户认证API: `/api/auth/*`
- 内容API: `/api/contents/*`
- SOP API: `/api/sops/*`
- 自定义SOP API: `/api/custom-sops/*`
- 数据分析API: `/api/analytics/*`

## 部署

### 环境变量

创建`.env`文件设置环境变量：

```
VITE_API_BASE_URL=http://your-api-endpoint
```

### 构建并部署

```bash
npm run build
# 将dist目录部署到你的Web服务器
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本) 