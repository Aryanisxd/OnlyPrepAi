import React from "react";

function Login({ setCurrentPage }){
    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="space-y-4">
                <div className="input-box">
                    <input type="email" placeholder="Email" className="flex-1 bg-transparent outline-none" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" className="flex-1 bg-transparent outline-none" />
                </div>
                <button className="btn-primary">
                    Login
                </button>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button 
                        onClick={() => setCurrentPage("SignUp")}
                        className="text-orange-600 hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Login;