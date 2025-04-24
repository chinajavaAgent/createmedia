import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user
  },
  
  actions: {
    async login(credentials) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await axios.post('/api/auth/login', credentials);
        const { token, user } = response.data;
        
        this.token = token;
        this.user = user;
        
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        return true;
      } catch (error) {
        this.error = error.response?.data?.message || '登录失败，请检查您的凭证';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async register(userData) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await axios.post('/api/auth/register', userData);
        const { token, user } = response.data;
        
        this.token = token;
        this.user = user;
        
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        return true;
      } catch (error) {
        this.error = error.response?.data?.message || '注册失败，请稍后重试';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async fetchUserProfile() {
      if (!this.token) return;
      
      this.loading = true;
      
      try {
        const response = await axios.get('/api/users/profile');
        this.user = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || '获取用户信息失败';
        if (error.response?.status === 401) {
          this.logout();
        }
      } finally {
        this.loading = false;
      }
    },
    
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    },
    
    async requestPasswordReset(email) {
      this.loading = true;
      this.error = null;
      
      try {
        await axios.post('/api/auth/forgot-password', { email });
        return true;
      } catch (error) {
        this.error = error.response?.data?.message || '发送重置密码邮件失败，请稍后重试';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async resetPassword(data) {
      this.loading = true;
      this.error = null;
      
      try {
        await axios.post('/api/auth/reset-password', data);
        return true;
      } catch (error) {
        this.error = error.response?.data?.message || '重置密码失败，请稍后重试';
        return false;
      } finally {
        this.loading = false;
      }
    }
  }
}) 