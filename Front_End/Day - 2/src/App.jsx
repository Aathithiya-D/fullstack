import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import LazySuspense from './components/LazySuspense'

const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy(() => import("./pages/auth/Register"))
const Lazyfpass = lazy(() => import("./pages/auth/ForgetPassword"))

const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"))
const LazyUserHome = lazy(() => import("./pages/user/Home"))
const LazyUserAboutUs = lazy(() => import("./pages/user/AboutUs"))
const LazyUserGallery = lazy(() => import("./pages/user/Gallery"))
const LazyUserServices = lazy(() => import("./pages/user/Services"))

const UserRoutes = () => (
  <LazyUserLayout>
    <Routes>
      <Route path="/home" element={<LazySuspense component={LazyUserHome}/>}/>
      <Route path="/aboutus" element={<LazySuspense component={LazyUserAboutUs}/>}/>
      <Route path="/gallery" element={<LazySuspense component={LazyUserGallery}/>}/>
      <Route path="/services" element={<LazySuspense component={LazyUserServices}/>}/>
    </Routes>
  </LazyUserLayout>  
)

function App() {

  return (
    <Routes>
      <Route exact path = "/" element = {<Navigate to = "/login"/>}/>
      <Route path = "/login" element = {<LazySuspense component={LazyLogin}/>}/>
      <Route path = "/register" element = {<LazySuspense component={LazyRegister}/>}/>
      <Route path = "/forgetpw" element = {<LazySuspense component={Lazyfpass}/>}/>
      <Route path = "/user/*" element = {<LazySuspense component={UserRoutes}/>}/>
    </Routes>
  )
}

export default App
