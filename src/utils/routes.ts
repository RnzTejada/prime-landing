import React, { lazy, Suspense } from 'react';

interface RouteType {
  key: number;
  exact: boolean;
  path: string;
  component: any;
  render?: any;
}

import LandingPage from '../pages/LandingPage';
import LightPaper from '../pages/LightPaper';
import Token from '../pages/Token';

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
