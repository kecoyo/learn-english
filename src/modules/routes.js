import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import router from '@/common/router';

const routes = [{ path: '/', component: lazy(() => import('./home')) }];

// 路由处理方式
// eslint-disable-next-line no-shadow
const generateRoutes = (routes) => {
  const navigate = useNavigate(); // navigate(to, {replace, state})
  const location = useLocation();
  const params = useParams(); // <Route path="/:path" />
  Object.assign(router, { navigate, location, params });

  return routes.map((item) => {
    if (item.children) {
      item.children = generateRoutes(item.children);
    }
    if (item.component) {
      item.element = (
        <Suspense fallback={<div />}>
          <item.component />
        </Suspense>
      );
    }
    return item;
  });
};

export default () => useRoutes(generateRoutes(routes));
