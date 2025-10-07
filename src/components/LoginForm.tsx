"use client";

import { useActionState } from 'react';



export default function LoginForm({ login }: { login: any }) {
  const [state, action, pending] = useActionState(login, undefined)


  return (
    <form action={action} className="w-full max-w-sm space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" className="border p-2 w-full" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" className="border p-2 w-full" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {pending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
