import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomSopStore = defineStore('customSop', {
  state: () => ({
    customSops: [],
    currentSop: null,
    templates: [],
    categories: [],
    loading: false,
    error: null
  }),
  
  getters: {
    getCustomSopById: (state) => {
      return (id) => state.customSops.find(sop => sop._id === id)
    },
    getTemplateById: (state) => {
      return (id) => state.templates.find(template => template._id === id)
    },
    categorizedSops: (state) => {
      const result = {};
      state.categories.forEach(category => {
        result[category._id] = state.customSops.filter(sop => sop.categoryId === category._id);
      });
      return result;
    },
    mySops: (state) => state.customSops.filter(sop => sop.isMyOwn),
    sharedSops: (state) => state.customSops.filter(sop => !sop.isMyOwn)
  },
  
  actions: {
    async fetchCustomSops() {
      this.loading = true;
      
      try {
        const response = await axios.get('/api/custom-sops');
        this.customSops = response.data;
        return this.customSops;
      } catch (error) {
        this.error = error.response?.data?.message || '获取自定义SOP列表失败';
      } finally {
        this.loading = false;
      }
    },
    
    async fetchCustomSopById(id) {
      this.loading = true;
      
      try {
        const response = await axios.get(`/api/custom-sops/${id}`);
        this.currentSop = response.data;
        return this.currentSop;
      } catch (error) {
        this.error = error.response?.data?.message || '获取自定义SOP详情失败';
      } finally {
        this.loading = false;
      }
    },
    
    async createCustomSop(sopData) {
      this.loading = true;
      
      try {
        const response = await axios.post('/api/custom-sops', sopData);
        this.customSops.push(response.data);
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '创建自定义SOP失败';
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async updateCustomSop(id, sopData) {
      this.loading = true;
      
      try {
        const response = await axios.put(`/api/custom-sops/${id}`, sopData);
        const index = this.customSops.findIndex(sop => sop._id === id);
        if (index !== -1) {
          this.customSops[index] = response.data;
        }
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '更新自定义SOP失败';
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async deleteCustomSop(id) {
      this.loading = true;
      
      try {
        await axios.delete(`/api/custom-sops/${id}`);
        this.customSops = this.customSops.filter(sop => sop._id !== id);
        return true;
      } catch (error) {
        this.error = error.response?.data?.message || '删除自定义SOP失败';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async shareCustomSop(id) {
      try {
        const response = await axios.post(`/api/custom-sops/${id}/share`);
        const index = this.customSops.findIndex(sop => sop._id === id);
        if (index !== -1) {
          this.customSops[index].isShared = true;
          this.customSops[index].shareLink = response.data.shareLink;
        }
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '分享失败';
        throw error;
      }
    },
    
    async duplicateCustomSop(id) {
      try {
        const response = await axios.post(`/api/custom-sops/${id}/duplicate`);
        this.customSops.push(response.data);
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '复制失败';
        throw error;
      }
    },
    
    async fetchSopCategories() {
      try {
        const response = await axios.get('/api/sop-categories');
        this.categories = response.data;
        return this.categories;
      } catch (error) {
        this.error = error.response?.data?.message || '获取SOP分类失败';
      }
    },
    
    async fetchSopTemplates() {
      try {
        const response = await axios.get('/api/sop-templates');
        this.templates = response.data;
        return this.templates;
      } catch (error) {
        this.error = error.response?.data?.message || '获取SOP模板失败';
      }
    },
    
    // 获取英语学习视频SOP模板
    async fetchEnglishSopTemplate() {
      try {
        const response = await axios.get('/api/sop-templates/english-learning');
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '获取英语学习视频SOP模板失败';
        throw error;
      }
    }
  }
}) 