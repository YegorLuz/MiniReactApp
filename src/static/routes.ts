export type RouteData = {
  id: number;
  to: string;
  title: string;
};

export const routes: Array<RouteData> = [{
  id: 1,
  to: '/',
  title: 'Home',
}, {
  id: 2,
  to: '/about',
  title: 'About',
}, {
  id: 3,
  to: '/users',
  title: 'Users',
}];