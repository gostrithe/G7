import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'

import { ConfigProvider } from 'vant';
import { Loading, Tabbar, TabbarItem, Icon, Button, Swipe, SwipeItem, Grid, GridItem, Image, Cell, Divider, Tag, Card, NavBar, ActionBar, ActionBarIcon, ActionBarButton, List, Popup, Toast } from 'vant';
import { Tab, Tabs, ShareSheet, CellGroup } from 'vant';
import { Form, Field} from 'vant';
import { Search } from 'vant';
/* vant所有组件样式（不推荐） */
import 'vant/lib/index.css';

import './assets/main.css';

const app = createApp(App);


app.use(store);
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
app.use(Form);
app.use(Field);
app.use(NavBar);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(List);
app.use(Popup);
app.use(Toast);
app.use(Search);
app.use(Loading);
app.use(ShareSheet);

app.use(CellGroup);
app.use(Tab);
app.use(Tabs);



app.mount('#app');
