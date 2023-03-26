// import { Link } from "react-router-dom";
// import logoimg from "../assests/images/logoimg.png";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// interface LogIn {
//   loggedIn: boolean;
//   handleLogout: () => void;
// }
// const Navbar1: React.FC<LogIn> = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
//   };

//   return (
//     <nav
//       className="flex justify-between items-center py-4"
//       style={{ backgroundColor: "black" }}
//     >
//       <Link to="/">
//         <img className="h-16 w-16 ml-8" src={logoimg} alt="Logo" />
//       </Link>
//       <div className="mr-4">
//         <Link className="px-4 py-2 text-white hover:bg-gray-200 rounded" to="/">
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               onClick={() => handleLogout()}
//             >
//               Logout
//             </button>
// import { Link } from "react-router-dom";
// import logoimg from "../assests/images/logoimg.png";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// interface LogIn {
//   loggedIn: boolean;
//   handleLogout: () => void;
// }

// const Navbar1: React.FC<LogIn> = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
//   };

//   return (
//     <nav
//       className="flex justify-between items-center py-4"
//       style={{ backgroundColor: "black" }}
//     >
//       <div className="flex items-center">
//         {/* <Link to="/">
//           <img className="h-16 w-16 ml-8" src={logoimg} alt="Logo" />
//         </Link> */}
//         <h1 className="text-white ml-4 text-2xl font-bold">E-commerce</h1>
//       </div>
//       <div className="mr-4">
//         <Link className="px-4 py-2 text-white hover:bg-gray-200 rounded" to="/">
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               onClick={() => handleLogout()}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/signup"
//             >
//               Sign up
//             </Link>
//             <Link to="/">
//               <img
//                 className="h-16 w-16 float-right mr-8"
//                 src={logoimg}
//                 alt="Logo"
//               />
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;
// import { Link } from "react-router-dom";
// import logoimg from "../assests/images/logoimg.png";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// import AddToCart from "../Components/Cart";


// interface LogIn {
//   loggedIn: boolean;
//   handleLogout: () => void;
// }

// const Navbar1: React.FC<LogIn> = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
//   };
//   const items = useSelector((state: RootState) => state.cart.items);

  
//   return (
//     <nav
//       className="flex justify-between items-center py-2 sticky top-0 z-50"
//       style={{backgroundColor: "black"}}
//     >
//       <div className="flex items-center">

//         <h1 className="text-white ml-4 text-2xl font-bold">E-commerce</h1>
//       </div>
//       <div className="mr-4">
//         <Link
//           className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
//           to="/"
//         >
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
//               onClick={() => handleLogout()}
//             >
//               Logout
//             </button>
//              {/* <Link to="/">
//               <img
//                 className="h-16 w-16 float-right mr-8"
//                 src={logoimg}
//                 alt="Logo"
//               />
//             </Link> */}
//           </>
          
//         ) : (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
//               to="/signup"
//             >
//               Sign up
//             </Link>
//             {/* <Link to="/">
//               <img
//                 className="h-16 w-16 float-right mr-8"
//                 src={logoimg}
//                 alt="Logo"
//               />
//             </Link> */}
//             <Link to="/add-to-cart">
//           <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
//             <a href="#" role="button" className="relative flex">
//               <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
//                 <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
//               </svg>
//               <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
//                 {items.length ?? 0}
//               </span>
//             </a>
//           </li>
//         </Link>
//           </>
//         )}
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;
import {Link} from "react-router-dom";
import logoimg from "../assests/images/logoimg.png";
import {useSelector, useDispatch} from "react-redux";
import {setlogInFlag} from "../redux/logInSlice";
import {RootState} from "../redux/store";
import AddToCart from "../Components/Cart";
import {useState} from "react";

interface LogIn {
  loggedIn: boolean;
  handleLogout: () => void;
}

const Navbar1: React.FC<LogIn> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items.length);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setlogInFlag(false));
  };

  return (
    <nav
      className="flex justify-between items-center py-2 sticky top-0 z-50"
      style={{backgroundColor: "black"}}
    >
      <div className="flex items-center">
        <h1 className="text-white ml-4 text-2xl font-bold">E-commerce</h1>
      </div>
      <div className="mr-4">
        <Link
          className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
          to="/"
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
              to="/contact"
            >
              Contact
            </Link>
            <button
              className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
            {/* <Link to="/">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link> */}
          </>
        ) : (
          <>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/signup"
            >
              Sign up
            </Link>
            {/* <Link to="/">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link> */}
          </>
        )}
        <Link to="/add-to-cart">
          <button
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                {items.length ?? 0}
              </div>
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar1;