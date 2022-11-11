import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { Icon ,ShareSheet, Cell, CellGroup} from 'vant';

import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App)


app.use(Icon);
app.use(router);
app.use(ShareSheet);
app.use(Cell);
app.use(CellGroup);



app.mount('#app')
