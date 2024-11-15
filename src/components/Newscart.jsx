// import React from 'react';

// const Newscart = ({ news }) => {
//     console.log(news)
//     return (
//         <div>
//             <h1>{news.title}</h1>

//         </div>
//     );
// };

// export default Newscart;

import React from 'react';
import { FaEye, FaStar, FaShareAlt, FaBookmark } from 'react-icons/fa';

const NewsCart = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-md border rounded-lg p-4 space-y-4">
            {/* Header with author and date */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-sm font-semibold">{news.author.name}</h3>
                        <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <FaBookmark className="text-gray-500 cursor-pointer hover:text-primary" />
                    <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold">{news.title}</h2>

            {/* Image */}
            <img src={news.image_url} alt="News" className="w-full h-96 object-cover rounded-lg" />

            {/* Details */}
            <p className="text-sm text-gray-600">
                {news.details.substring(0, 150)}...
                <span className="text-primary font-semibold cursor-pointer"> Read More</span>
            </p>

            {/* Footer with rating and views */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className={`text-sm ${index < Math.floor(news.rating.number) ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="font-semibold ml-1">{news.rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center space-x-1">
                    <FaEye />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;
