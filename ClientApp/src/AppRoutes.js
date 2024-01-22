import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import PublicFeed from './components/PublicFeed.js';
import NewPost from "./components/NewPost.js";

//maybe set state here and bleed itg down to Feed?

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
    element: <PublicFeed /> //public URL state here?
    },
    {
        path: '/new-post',
        element: <NewPost />
    }
    //route where RL = username to produce that user's posts: PublicFeed
    //other route is PersonalFeed which depends on logged in user's information to grab right one
];

export default AppRoutes;
