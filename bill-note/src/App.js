import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import routes from '@/router';
import NavBar from '@/components/NavBar';

const  App = () => {


  return(
    <Router>
      <>
       <Routes>
        {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
       </Routes>
      <NavBar showNav={true} />
     </>
  </Router>
  )
};

export default App;