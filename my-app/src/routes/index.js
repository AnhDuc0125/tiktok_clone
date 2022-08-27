//layouts
import { HeaderOnly } from '~/layouts';

import config from '~/configs';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';

const publicRoutes = [
  {
    path: config.route.home,
    component: Home,
  },
  {
    path: config.route.following,
    component: Following,
  },
  {
    path: config.route.profile,
    component: Profile,
  },
  {
    path: config.route.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.route.live,
    component: Live,
    // layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
