import React from "react";

function AuthButton({ isLoggedIn }) {
    return (
        <div className='h-full flex items-center gap-7'>
            {
                !isLoggedIn ? (
                    <>
                        <button type='button' className='text-white font-semibold cursor-pointer'>
                            Login
                        </button>
                        <button type='button' className='text-white font-semibold cursor-pointer'>
                            Join THMD
                        </button>
                    </>
                ) : (
                    <>
                        <button type='button' className='text-white font-semibold cursor-pointer'>
                            <FaBell />
                        </button>
                        <button
                            type='button'
                            className='size-8 rounded-full uppercase text-white text-xs font-semibold cursor-pointer bg-[#01C6AC] flex items-center justify-center p-2'
                        >
                            m
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default AuthButton
