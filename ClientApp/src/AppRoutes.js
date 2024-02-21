import { Home } from "./components/Home";
import PublicFeed from './components/PublicFeed.js';
import NewPost from "./components/NewPost.js";
import NotFound from "./components/NotFound.js";
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';

//maybe set state here and bleed itg down to Feed?

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
    },
    {
        path: '/create-account',
        element: <CreateAccount />
    },
  {
    path: '/feed',
    element: <PublicFeed /> //public URL state here?
  },
  {
        path: '/new-post',
        element: <NewPost />
  },
  {
        path: '/404',
        element: <NotFound />
  }
    //route where RL = username to produce that user's posts: PublicFeed
    //other route is PersonalFeed which depends on logged in user's information to grab right one
];

export default AppRoutes;
