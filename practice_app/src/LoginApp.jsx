import React, { useState } from 'react'

export default function LoginApp({ onLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    onLogin(name.trim() || 'User')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Sign In</h1>
        <p className="mb-6 text-sm text-gray-500">
          Enter your name, email, and password to continue.
        </p>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-black py-2 font-medium text-white transition hover:bg-gray-800"
        >
          Login
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={(event) => event.preventDefault()}
            className="font-medium text-black"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
