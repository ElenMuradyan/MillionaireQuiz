import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { ROUTE_CONSTANTS } from './core/utilis/constants';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <RouterProvider
    router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Login/>}></Route>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.REGISTER} element={<Register/>}></Route>
          </Route>
        )
      )
    }
    />
  );
}

export default App;
