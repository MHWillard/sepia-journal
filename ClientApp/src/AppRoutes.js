import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Feed from './components/Feed.js';
import NewPost from "./components/NewPost.js";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
  {
    path: '/feed',
    element: <Feed />
    },
    {
        path: '/new-post',
        element: <NewPost />
    }
];

export default AppRoutes;
