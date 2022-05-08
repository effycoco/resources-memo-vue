import { createApp } from 'vue';
import App from '@/App.vue';
import BaseCard from '@/components/BaseCard';
import BaseButton from '@/components/BaseButton';
const app = createApp(App);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.mount('#app');
