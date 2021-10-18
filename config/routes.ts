export default {
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/layouts/index',
      wrappers: ['@/wrappers/auth'],
      routes: [
        { path: '/list', component: 'list' },
        { path: '/admin', component: 'admin' },
      ],
    },
    { path: '/login', component: './login', exact: true },
  ],
};
