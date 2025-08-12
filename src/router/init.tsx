import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { AUTH_CONFIG } from '@/common/constants/app.constants';
import routes from '@/router';
import type { Meta, RouteItem } from '@/types/complex/router';

export function init(list: RouteItem[] = routes): RouteObject[] {
  const routeObjects = list.map(item => {
    const route: Partial<RouteObject> = {
      element: wrapElement(item.component, item.meta),
    };
    if (item.index) {
      route.index = true;
    } else if (item.path) {
      route.path = item.path;
    }
    if (item.children) {
      route.children = init(item.children);
    }
    return route;
  });
  return routeObjects as RouteObject[];
}

function wrapElement(
  component: React.LazyExoticComponent<React.ComponentType<any>>,
  meta?: Meta,
): React.ReactNode {
  const WrappedComponent = () => {
    React.useEffect(() => {
      if (meta?.title) {
        document.title = meta.title;
      }
    }, []);
    if (meta?.auth && !isAuthenticated()) {
      return <Navigate to={AUTH_CONFIG.LOGIN_REDIRECT} replace />;
    }

    return React.createElement(component);
  };

  return React.createElement(WrappedComponent);
}

function isAuthenticated(): boolean {
  return (
    !!sessionStorage.getItem(AUTH_CONFIG.USER_TOKEN_KEY) ||
    !!localStorage.getItem(AUTH_CONFIG.USER_TOKEN_KEY)
  );
}

export default init;
