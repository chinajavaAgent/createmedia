<template>
  <div class="min-h-screen bg-gray-50">
    <header v-if="showHeader" class="bg-white shadow">
      <Navbar />
    </header>
    
    <main>
      <router-view />
    </main>
    
    <footer v-if="showFooter" class="bg-gray-800 text-white py-8">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';

const route = useRoute();

// 在某些页面（如登录、注册页）隐藏页眉页脚
const showHeader = computed(() => {
  return !['login', 'register'].includes(route.name);
});

const showFooter = computed(() => {
  return !['login', 'register'].includes(route.name);
});
</script> 