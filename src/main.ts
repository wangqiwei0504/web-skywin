import { createApp } from 'vue';
import '@/assets/styles/main.less';
// 此处引入 Animate.css 动画库
import 'animate.css';
// import 'amfe-flexible';
import 'virtual:windi.css'
import App from '@/App.vue';
import router from '@/router';
import pinia from '@/store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '../node_modules/swiper/swiper-bundle.css';

console.log(router);

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia).use(router);
router.isReady().then(() => app.mount('#app'));
export default app;
