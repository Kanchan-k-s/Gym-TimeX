<template>
    <!-- <Register></Register> -->
    <div>
      <router-view/>
    </div>
    
    <!-- <AdminDashboard></AdminDashboard> -->
</template>

<script>
import { createApp, defineComponent, nextTick, onMounted } from 'vue';
import Register from './views/Register.vue';

// import AdminDashboard from "./views/AdminDashboard.vue"

export default {
  setup() {
    onMounted(() => {
      const myNewComponent = defineComponent({
        extends: Register,
      });
      const app1 = createApp(myNewComponent);

      nextTick(() => {
        // app1.use(ElementPlus);
        app1.mount('#popup-content');
      });
    });
  }
}
</script>

<style>

</style>
