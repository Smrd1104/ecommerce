import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-transparent border p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-300"

                        />
                    </div>
                    
                        <button
                            type="submit"
                            className="w-full bg-primary text-white p-3 rounded-lg"
                        >
                            Login
                        </button>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;
