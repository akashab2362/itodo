import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e){
    e.preventDefault();

    try {
        await axios.post("http://localhost:8000/", {
            email, password
        }).then((res)=>{
            if(res.data == "exist")
            {
                navigate('/')
            }
            else if(res.data == "not exist")
            {
                alert("Please Signup first");
            }
        }).catch((e)=>{
            alert("Wrong Details");
            console.log(e);
        })
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <section>
        <div className="grid ml-96 grid-cols-1 lg:grid-cols-2 ">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
                Sign in
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={submit}
                      className="inline-flex w-full items-center justify-center rounded-md bg-indigo-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-indigo-900"
                    >
                      Get started <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
