import React, { useState } from "react";

function Login({handleLogin}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const submitHandler = (event) => {
    event.preventDefault();
    handleLogin(form.email,form.password)
    setForm({ email: "", password: "" });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center px-4">
      <div className="border-2 rounded-xl border-emerald-600 p-8 sm:p-12 md:p-20 w-full max-w-md">
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={form.email}
            onChange={(event) => {
              setForm({ ...form, email: event.target.value });
            }}
            required
            className="rounded-full border-2 border-emerald-600 py-3 px-5 font-medium text-lg text-white outline-none placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={form.password}
            onChange={(event) => {
              setForm({ ...form, password: event.target.value });
            }}
            required
            className="rounded-full border-2 border-emerald-600 py-3 px-5 font-medium text-lg text-white outline-none placeholder:text-gray-400 mt-3 w-full"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="rounded-full bg-emerald-600 hover:bg-emerald-700 font-semibold py-2 px-8 text-lg text-white mt-7 w-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
