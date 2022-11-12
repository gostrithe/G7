import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { ConfigProvider } from 'vant';
import { Tabbar, TabbarItem, Icon, Button, Swipe, SwipeItem, Grid, GridItem, Image, Cell, Divider, Tag, Card } from 'vant';

/* vant所有组件样式（不推荐） */
import 'vant/lib/index.css';

import './assets/main.css';

const app = createApp(App);

app.use(router);

/* vant */
app.use(ConfigProvider);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(Button);
app.use(Swipe);
app.use(SwipeItem);
app.use(Grid);
app.use(GridItem);
app.use(Image);
app.use(Cell);
app.use(Divider);
app.use(Tag);
app.use(Card);


app.mount('#app');
