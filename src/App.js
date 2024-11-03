import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { FIRESTORE_PATH_NAMES, ROUTE_CONSTANTS } from './core/utilis/constants';
import MainLayout from './layouts/MainLayout';
import Cabinet from './pages/Cabinet';
import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from './context/authContextProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './services/firebase';
import Loading from './components/sheard/Loading';
import MainGame from './pages/MainGame';
import GameStart from './pages/GameStart';

import './styles/global.css';

function App() {
  const [ isAuth, setIsAuth ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ userProfileInfo, setUserProfileInfo ] = useState({});

  const handleGetUserData = useCallback(async (uid) => {
    const docRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const response = await getDoc(docRef);

    if(response.exists()){
      setUserProfileInfo(response.data());
    }
  },[])

  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      user?.uid && handleGetUserData(user.uid);

      setLoading(false);
      setIsAuth(Boolean(user));
    })
  },[handleGetUserData])

  return (
    <Loading loading={loading}>
    <AuthContext.Provider value={userProfileInfo}>
          <RouterProvider
              router={
                createBrowserRouter(
                  createRoutesFromElements(
                    <Route path='/' element={<MainLayout/>}>
                      <Route index element={isAuth ? <Navigate to={ROUTE_CONSTANTS.CABINET} /> : <Login setIsAuth={setIsAuth}/>}></Route>
                      <Route path={ROUTE_CONSTANTS.LOGIN} element={isAuth? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Login setIsAuth={setIsAuth}/>} />
                      <Route path={ROUTE_CONSTANTS.REGISTER} element={isAuth? <Navigate to={ROUTE_CONSTANTS.CABINET}/> : <Register/>}/>

                      <Route path={ROUTE_CONSTANTS.CABINET} element={isAuth? <Cabinet/> : <Navigate to={ROUTE_CONSTANTS.LOGIN}/>}>
                      <Route index element={<GameStart/>}/>
                        <Route path={ROUTE_CONSTANTS.GAMESTART} element={<GameStart/>}/>
                        <Route path={ROUTE_CONSTANTS.MAINGAME} element={<MainGame/>}/>      
                      </Route>
                    </Route>
                  )
                )
              }
        />
        </AuthContext.Provider>
    </Loading>
  );
}

export default App;
