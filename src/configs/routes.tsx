export default [
  {
    path: '/',
    wrappers: [
      '@/wrappers/sentry',
      '@/wrappers/material-ui',
      '@/wrappers/snackbar',
    ],
    routes: [
      {
        path: '/',
        component: '@/pages/index',
        title: 'Home',
        exact: true,
      },

      {
        path: '/',
        redirect: '/',
      },
    ],
  },
];
