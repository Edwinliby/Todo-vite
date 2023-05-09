import { useEffect, useRef, useState } from "react";
import Home from "./Home";

function App() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [showHome, setShowHome] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localEmail, localSignUp]);

  const handleClick = () => {
    if (
      name.current?.value &&
      email.current?.value &&
      password.current?.value
    ) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (email.current?.value === localEmail && password.current?.value === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div>
      {showHome ? (
        <Home />
      ) : show ? (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[2rem] font-semibold">Hey, {localName} 👋</h1>
              <p className="text-gray-500 text-[.9rem] ">Enter the information you entered while registering.</p>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                ref={email}
                className="p-2 mt-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                ref={password}
                className="p-2 mt-1 rounded-md shadow" />
            </div>
            <button
              onClick={handleSignIn}
              className="w-full mt-3 shadow bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:to-sky-500 hover:from-indigo-500 text-white font-semibold py-1 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center justify-center">
              <img src="/mu.png" alt="mu-todo" className="rotate-3 h-[5rem]" />
              <span className="block h-[2px] bg-black w-2"></span>
              <h1 className="text-black font-semibold text-[2rem]">Todo</h1>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                ref={name}
                className="p-2 mt-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                ref={email}
                className="p-2 mt-1 rounded-md shadow" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                ref={password}
                className="p-2 mt-1 rounded-md shadow" />
            </div>
            <button
              onClick={handleClick}
              className="shadow bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:to-sky-500 hover:from-indigo-500 text-white font-semibold py-1 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
