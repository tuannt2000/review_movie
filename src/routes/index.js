import routesConfig from "~/constants/routes";

import Home from "~/pages/Home";
import Movie from "~/pages/Movie";
import People from "~/pages/People";
import User from "~/pages/User/User";
import Me from "~/pages/Me/Me";
import UserTable from "~/pages/Admin/User/UserTable";
import MovieTable from "~/pages/Admin/Movie/MovieTable";
import MovieDetail from "~/pages/Admin/Movie/MovieDetail";
import PeopleTable from "~/pages/Admin/People/PeopleTable";
import PeopleDetail from "~/pages/Admin/People/PeopleDetail";

export const routes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.movie, component: Movie },
  { path: routesConfig.people, component: People },
  { path: routesConfig.user, component: User },
  { path: routesConfig.me, component: Me },
  { path: routesConfig.adminUser, component: UserTable, role: "admin" },
  { path: routesConfig.adminMovies, component: MovieTable, role: "admin" },
  {
    path: routesConfig.adminMovieDetail,
    component: MovieDetail,
    role: "admin",
  },
  { path: routesConfig.adminPeoples, component: PeopleTable, role: "admin" },
  {
    path: routesConfig.adminPeopleDetail,
    component: PeopleDetail,
    role: "admin",
  },
];
