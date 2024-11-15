import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className=' w-full'>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle /><span>Login with Google</span></button>
                <button className='btn'><FaGithub /><span>Login with Github</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;