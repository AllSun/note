
import Layout from "@/pages/Layout";
import New from "@/pages/New";
import Month from "@/pages/Month";
import { createBrowserRouter } from "react-router-dom";
import BillAll from "@/pages/Year";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: 'month',
                element: <Month/>
            },
            {
                path: 'year',
                element: <BillAll/>
            }
        ]

    },
    {
        path: '/new',
        element: <New/>
    }

])

export default router