import qs from 'qs';
import options from './options';
import { isServer } from './isServer';

export const getInitData = () => {
  if (!isServer) {
    const initData: any = qs.parse(window.location.search.slice(1));
    if (initData.toggle)
      initData.toggle.free_shipping =
        initData.toggle.free_shipping === 'true' ? true : undefined;
    return initData;
  }
  return false;
};

export const setUrl = (searchState: any) => {
  if (!isServer) {
    const search = searchState
      ? `${window.location.pathname}?${qs.stringify(searchState)}`
      : '';
    window.history.pushState(searchState, '', search);
  }
};

export const getDefaultPath = () => {
  const getParent = (lastRoute: any) => {
    const parent: any = [];
    if (!lastRoute) return parent;
    parent.push(lastRoute);
    options.forEach((option) => {
      if (option.children) {
        option.children.forEach((child) => {
          if (child.key === lastRoute) {
            parent.push(option.key);
          }
        });
      }
    });
    return parent;
  };
  if (!isServer && window.location.pathname) {
    const routes = window.location.pathname.split('/');
    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      return getParent(lastRoute);
    }
  }
  return [];
};
