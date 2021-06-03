import React, { lazy, Suspense } from 'react';

interface RouteType {
  key: number;
  exact: boolean;
  path: string;
  component: any;
  render?: any;
}

const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const LightPaper = React.lazy(() => import('../pages/LightPaper'));
const Token = React.lazy(() => import('../pages/Token'));

export const routes: RouteType[] = [
  {
    key: 1,
    exact: true,
    path: '/',
    component: LandingPage,
  },
  {
    key: 2,
    exact: true,
    path: '/lightpaper',
    component: LightPaper,
  },
  {
    key: 3,
    exact: true,
    path: '/token',
    component: Token,
  },
];

export type { RouteType };
