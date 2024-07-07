import Home from '@/pages/Home'
import Data from '@/pages/Data'
import User from '@/pages/User'
import Login from '@/pages/Login'

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/data",
    component: Data
  },
  {
    path: "/user",
    component: User
  }
];

export default routes