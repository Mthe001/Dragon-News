// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const LeftNavbar = () => {

//     const [categories, seCatergories] = useState([]);

//     useEffect(() => {
//         fetch('https://openapi.programming-hero.com/api/news/categories')
//             .then(res => res.json())
//             .then(data => seCatergories(data.data.news_category))
//             .then(err => console.log(err))
//     }, []);

//     return (
//         <div className=''>
//             <h1 className='font-semibold'>All category ({categories.length})</h1>

//             <div className='p-3'>

//                 <div className='flex flex-col gap-4'>
//                     {
//                         categories.map((category) => <NavLink to={`/catergory/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}
//                         </NavLink>)
//                     }
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default LeftNavbar;


import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category))
            .catch((err) => console.error("Failed to fetch categories:", err));
    }, []);

    return (
        <div>
            <h1 className='font-semibold'>All Categories ({categories.length})</h1>
            <div className='p-3'>
                <div className='flex flex-col gap-4'>
                    {categories.map((category) => (
                        <NavLink
                            to={`/category/${category.category_id}`} // Fixed the typo here
                            className={({ isActive }) =>
                                `btn ${isActive ? 'bg-gray-300' : ''}`
                            }
                            key={category.category_id}
                        >
                            {category.category_name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftNavbar;
