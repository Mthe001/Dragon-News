import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On</h2>

            <div className='join flex  join-vertical *:bg-base-100'>
                <button className='btn join-vertical justify-start' ><FaFacebook />Facebook</button>
                <button className='btn join-vertical justify-start' ><FaTwitter />Twitter</button>
                <button className='btn join-vertical justify-start' ><FaInstagram />Instagram</button>

            </div>
        </div>
    );
};

export default FindUs;