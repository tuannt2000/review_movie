import routesConfig from '~/constants/routes';

import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import People from '~/pages/People';
import User from '~/pages/User/User';
import Me from '~/pages/Me/Me';
import Search from '~/pages/Search/Search';

export const routes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.movie, component: Movie },
    { path: routesConfig.people, component: People },
    { path: routesConfig.user, component: User },
    { path: routesConfig.me, component: Me },
    { path: routesConfig.search, component: Search },
];