import React, { useState } from 'react';
import {TextField} from '@mui/material';
import videobg1 from './videos/login.mp4'
// import { login } from '../features/admin';
// import User from '../axios/User';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 


  // const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const user = {};

    user["email"] = email;
    user["password"] = password;

    // try{
    //   const res = User.loginUser(user)
    //   .then((response) => {
    //     toast.success("Login Successful")
    //      console.log(response);
    //       const token = response.data.token; 

    //       window.localStorage.setItem("jwtToken",token);
          
    //       const info = atob(token.split(".")[1]);

    //       console.log(info);
    //       const infoParse = JSON.parse(info);
    //       const uid = (infoParse.user.uid);
    //       const role = (infoParse.user.role);

    //       window.localStorage.setItem("uid", uid);
    //       window.localStorage.setItem("role", role);

    //       console.log(infoParse.user.name);


    //       if(role==='ADMIN')
    //       {
    //         window.location.href = '/admin'
    //         // navigate('/admin')
    //       } 
    //       else
    //       {
    //         // history.push('/home');
    //         window.location.href  = '/home'
    //         // navigate('/home')
    //       }
    //     }
    //    )
    //   .catch((err)=>{ 
    //     toast.error("Invalid Credentials")
    //     console.log(err)
    //   });
    //   }
    // catch(err)
    // { 
    //   console.log(err);
    // }
  }

  return (
    <div className="fixed inset-0 w-full h-full object-cover z-[-1]">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <video autoPlay  loop muted playsInline className='back-video'>
        <source src={videobg1} type='video/mp4'/>
      </video>
      <div className="before">
      <div className="container bg-white p-6 rounded shadow-md text-center opacity-80 backdrop-blur-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full overflow-x-hidden">       
         <form className="login-form" onSubmit={handleLogin}>
            <div className="font-bold text-end font-fantasy">
              Starry Ni8's.inc
            </div>
            <div className="login text-left">
              <br />
              <div className='text-3xl font-bold'>
                Login
              </div>
              <br />
              <h3>Welcome Back, Experience the Rhythm of Events!!</h3>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            {errorMessage && <p className="error text-left">{errorMessage}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <br /><br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300" onClick={() => store.dispatch(login({ email }))}>Login</button>
            <br /><br />
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React from 'react';

// function Login() {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
//             Aaha Party!!
//         </a>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Sign in to your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                   </div>
//                   <div className="ml-3 text-sm">
                  
//                   </div>
//                 </div>
//                 <a href="#" className=" dark:text-white text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
//               </div>
//               <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//               <a href="/user/home" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a></button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;