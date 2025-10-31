import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isLoading = useSelector((state) => state.app.isLoading);

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const LoginHandler = () => {
    setIsLogin(!isLogin);
  };

  const BASE_URL = "http://localhost:8080/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    // login
    if (isLogin) {
      try {
        const res = await axios.post(`${BASE_URL}/login`, inputData, {
          withCredentials: true,
        });
       
        if (res.data.success) {
          toast.success(res.data.message);
         
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } catch (error) {
        console.log("Error caught:", error);

        // ✅ Check if error.response and error.response.data exist
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // register
      dispatch(setLoading(true));
      try {
        const res = await axios.post(`${BASE_URL}/register`, inputData, {
          withCredentials: true,
        });
        
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally {
        dispatch(setLoading(false));
      }
    }

    setInputData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header />
      <div className="w-full absolute">
        <img
          className="bg-cover"
          src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-80 rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-3 text-white">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <>
              <label className="text-white">Full Name:- </label>
              <input
                name="name"
                value={inputData.name}
                onChange={handleData}
                type="text"
                placeholder="name"
                className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
              />
            </>
          )}
          <label className="text-white">Email:- </label>
          <input
            name="email"
            value={inputData.email}
            onChange={handleData}
            type="email"
            placeholder="email"
            className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
          />
          <label className="text-white">Password:- </label>
          <input
            name="password"
            value={inputData.password}
            onChange={handleData}
            type="password"
            placeholder="password"
            className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="text-white m-4 bg-blue-600 p-2 rounded-sm"
          >
           {`${isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}`} 
          </button>
          <p className="text-white ">
            {isLogin ? "New To Netflix :-" : " Already Have Account ?"}
            <span
              className="text-blue-300 ml-1 font-semi-bold font-size-3xl cursor-pointer"
              onClick={LoginHandler}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
