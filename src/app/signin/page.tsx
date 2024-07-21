"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex w-[380px] h-[370px] rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center p-5">
      <h1 className="text-2xl mb-7 font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="py-1 text-[var(--zinc)] bg-[var(--dark-green)] rounded"
        >
          Sign In
        </button>
        <button
          onClick={() => window.location.href = '/register'}
          className="flex w-min m-auto text-sm text-zinc-500">Register</button>
      </form>
    </div>
  );
}