import { LogOut } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
        <div className="grid h-screen place-content-center bg-gradient-to-r from-slate-900 to-slate-700 px-4">
            <div className="text-center">
                <h1 className="text-4xl font-black text-white">Log In is Needed</h1>
                <p className="mt-4 text-gray-500 text-2xl">You need to Log in to Register</p>
                <Link to="/login" className="mt-6  rounded bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-3 text-[1.5rem] font-medium text-white  focus:outline-none focus:ring flex items-center justify-center gap-2">
                    Log in <LogOut />
                </Link>
            </div>
        </div>
    )
}

export default Error

