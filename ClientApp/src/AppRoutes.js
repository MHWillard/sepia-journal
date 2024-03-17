import { Home } from "./components/Home";
import UserFeed from './components/UserFeed.js';
import NewPost from "./components/NewPost.js";
import NotFound from "./components/NotFound.js";
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';
import Profile from './components/Profile.js'
import ProtectedRoute from './routes/ProtectedRoute.js'

//maybe set state here and bleed itg down to Feed?

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/home',
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
    path: '/feed/*',
    element: <UserFeed /> //public URL state here?
  },
  {
    path: '/new-post',
      element: <ProtectedRoute><NewPost /></ProtectedRoute>
      //element: <NewPost />
  },
  {
    path: '/*',
    element: <NotFound />
    },
    {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
    }
    //route where RL = username to produce that user's posts: PublicFeed
    //other route is PersonalFeed which depends on logged in user's information to grab right one
];

export default AppRoutes;
