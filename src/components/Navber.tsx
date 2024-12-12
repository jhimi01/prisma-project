import Link from 'next/link'
import React from 'react'

export default function Navber() {
  return (
    <div className="navbar bg-base-100 mx-auto w-10/12">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal space-x-3 font-semibold underline px-1">
      <Link href='/'>Home</Link>
      <Link href='/login'>Login</Link>
      </ul>
    </div>
  </div>
  )
}
