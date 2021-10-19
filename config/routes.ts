// export default {
//   routes: [
//     {
//       exact: true,
//       path: '/',
//       component: '@/layouts/index',
//       wrappers: ['@/wrappers/auth'],
//       routes: [
//         { path: '/list', component: 'list' },
//         { path: '/admin', component: 'admin' },
//       ],
//     },
//     {
//       path: '/login',
//       component: './login',
//       exact: true,
//       wrappers: ['@/wrappers/auth'],
//     },
//   ],
// };

export default [
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/auth'],
    redirect: '/list',
    routes: [
      { path: '/list', component: 'list' },
      { path: '/admin', component: 'admin' },
    ],
  },
  {
    path: '/login',
    component: './login/index',
    exact: true,
  },
];
