import React from "react";

function SignUp({ setCurrentPage }){
    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="space-y-4">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" className="flex-1 bg-transparent outline-none" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" className="flex-1 bg-transparent outline-none" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" className="flex-1 bg-transparent outline-none" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" className="flex-1 bg-transparent outline-none" />
                </div>
                <button className="btn-primary">
                    Sign Up
                </button>
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button 
                        onClick={() => setCurrentPage("Login")}
                        className="text-orange-600 hover:underline"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    )
}

export default SignUp;