import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newscart from '../components/Newscart';

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            {/* <p className='text-gray-400 text-sm'>{news.length}News Found In This Category</p> */}
            <div>
                {
                    news.map(singleNews => <Newscart key={singleNews._id} news={singleNews}>{ }</Newscart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;