import React from "react";
import {  Login, AdminRegister , AdminList ,DocenteCalendar ,DocenteCreate ,DocenteDash ,DocenteHistory , CheckRequest, TableRequests, Register} from "./pages";

export const routes = [
    {
        path: '/',
        element: <Login/>
    },

    {
        path: '/register-admin',
        element: <AdminRegister/>
    },
    
    {
        path: '/adminList',
        element: <AdminList/>

    },
    {
        path: '/docenteCalendar',
        element : <DocenteCalendar/>
    },
    {
        path: '/docenteCreate',
        element: <DocenteCreate/>
    },
    {
        path: '/docenteDash',
        element: <DocenteDash/>
    },
    {
        path: '/docenteHistory',
        element: <DocenteHistory/>
    },
    {
        path: '/miembroCheck',
        element: <CheckRequest/>
    },
    {
        path: '/miembroTable',
        element: <TableRequests/>
    }

]