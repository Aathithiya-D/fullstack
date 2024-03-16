import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import LazySuspense from './components/LazySuspense'

const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyRegister = lazy(() => import("./pages/auth/Register"))
const Lazyfpass = lazy(() => import("./pages/auth/ForgetPassword"))

function App() {

  return (
    <Routes>
      <Route exact path = "/" element = {<Navigate to = "/login"/>}/>
      <Route path = "/login" element = {<LazySuspense component={LazyLogin}/>}/>
      <Route path = "/register" element = {<LazySuspense component={LazyRegister}/>}/>
      <Route path = "/forgetpw" element = {<LazySuspense component={Lazyfpass}/>}/>
    </Routes>
  )
}

export default App
