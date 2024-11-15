// import { createBrowserRouter } from "react-router-dom";
// import HomeLayout from "../layouts/HomeLayout";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HomeLayout></HomeLayout>,
//         children: [
//             {
//                 path: 'category/:id',
//                 element: <h1>This is category</h1>,
//             },

//         ],
//     },
//     {
//         path: '/news',
//         element: <h1>News layout</h1>,

//     },
//     {
//         path: '/auth',
//         element: <h1>Login</h1>,
//     },
//     {
//         path: '*',
//         element: <h1>error</h1>,
//     },
// ]);

// export default router;


import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

// Ensure HomeLayout includes <Outlet /> to render child routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />, // Simplified tag syntax
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: 'category/:id', // Child routes don’t need leading slashes
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: '/news',
        element: <h1>News layout</h1>,
    },
    {
        path: '/auth',
        element: <h1>Login</h1>,
    },
    {
        path: '*', // Wildcard route for unmatched paths
        element: <h1>Error: Page Not Found</h1>,
    },
]);

export default router;
