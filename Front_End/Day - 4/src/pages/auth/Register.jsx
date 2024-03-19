import React, { useState } from 'react';
import { TextField } from '@mui/material';
import videobg from './videos/signup.mp4'
// import User from '../axios/User';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate(); 

  // const validatePassword = () => {
  //   if (password.length < 8) {
  //     setPasswordError('Password must be at least 8 characters long');
  //   } else {
  //     setPasswordError('');
  //   }
  // };

  const handleSignup = (e) => {
    e.preventDefault();
    // validatePassword();

  //   const user = {};

  //   user["name"] = name;
  //   user["email"] = email;
  //   user["password"] = password;
  //   user['role'] = "USER";
  //   try
  //   {

  //     const res = User.registerUser(user);

  //     res.then(data => {
  //       console.log(res);
  //       if(data === "User registered successfully")
  //       {
  //         alert(data);
  //         navigate('/');
  //       }
  //       else
  //       {
  //         alert(data);
  //       }
  //     })

  //   }
  //   catch(err)
  //   {
  //     console.log(err);
  //   }

  };

  return (
    <div className='fixed inset-0 w-full h-full object-cover z-[-1]'>
      <video autoPlay loop muted playsInline className="back-video">
        <source src={videobg} type="video/mp4" />
      </video>
      <div className='before'>
      <div className="container bg-white p-6 rounded shadow-md text-center opacity-80 backdrop-blur-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full overflow-x-hidden">       
          <form className="signup-form" onSubmit={handleSignup}>
            <div className='font-bold text-right'>
              Starry Ni8's.inc
            </div>
            <br/>
            <div className='text-left font-bold'>
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <br />
            </div>
            <div className='text-left'>
              <h3 className="text-lg">Your Passport to Event Extravaganza !!!!</h3>
              </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              error={!!emailError}
              helperText={emailError}
            />
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
              error={!!passwordError}
              helperText={passwordError}
            />
            <br/><br/>   
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">SignUp</button>
            <br/><br/>
            <p>Already have an account? <Link to="/" className="text-primary">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


// import React from 'react';

// function Register() {
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
//               Create your account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
//                 <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Aaha Party" required />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
//                 <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//               </div>
              
//               <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
            
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account yet? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;