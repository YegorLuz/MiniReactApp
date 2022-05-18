import { Location } from 'react-router-dom';
import { routes, RouteData } from '../static/routes';

export const isUser = (role: string): boolean => role === 'user';

export const getRoutes = (role: string): Array<RouteData> => isUser(role) ? routes.slice(0, 2) : routes;

export const isRouteAllowed = (role: string, location: Location): boolean =>
  !!getRoutes(role).find((item: RouteData) => item.to === location.pathname);

export const isInitialRoute = (location: Location) => location.pathname === '/' || location.pathname === '/login';

export const pageTitle = (location: Location) => {
  const route = routes.find((item: RouteData) => item.to === location.pathname);
  return route ? route.title : 'Sign In';
};

export const userNameLetters = (name: string) =>
  name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();

export const isActiveRoute = (to: string, location: Location) => location.pathname === to;