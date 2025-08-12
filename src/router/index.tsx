import { lazy } from 'react';

import type { RouteItem } from '@/types/complex/router';

const routes: RouteItem[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    meta: { title: '首页', auth: false },
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/complex/404')),
    meta: { title: '404', auth: false },
  },
];

export default routes;
