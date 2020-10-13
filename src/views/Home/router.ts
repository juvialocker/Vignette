import { amendRouter } from '@/helpers/utils';

const rs = {
  path: 'home',
  name: 'home',
  component: () => import(/* webpackChunkName: "Home" */ './container.vue'),
  children: [
    {
      path: '/',
      // 不需要首页可注释掉meta
      meta: { txt: '首页', keepAlive: true, isBack: true },
      icon: 'iconmanage',
      component: () => import(/* webpackChunkName: "Home" */ './home.vue'),
    },
  ],
};

export default amendRouter(rs);
