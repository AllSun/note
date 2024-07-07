import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import routes from '@/router';
import NavBar from '@/components/NavBar';
import {useEffect,useState} from 'react'

const  App = () => {
  const location = useLocation()
  const needNav = ['/', '/data', '/user'] // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false) // 是否展示 Nav
  useEffect(() => {
    setShowNav(needNav.includes(location.pathname))
    console.log('effect触发，showNav值为:'+showNav)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]) // [] 内的参数若是变化，便会执行上述回调函数=  


  return(
      <div>
       <Routes>
        {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
       </Routes>
      <NavBar showNav={showNav} />
     </div>
  )
};

export default App;