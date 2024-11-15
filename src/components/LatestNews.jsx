import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center justify-center bg-base-200 py-2'>
            <p className='rounded-[4px] bg-[#D72050] text-white font-semibold px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, officiis?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, officiis?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, officiis?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;