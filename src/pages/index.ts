import React from 'react';




export const Login = React.lazy(() => import('../components/login/Login'));
export const Register = React.lazy(() => import('../components/admin/register'));
export const AdminRegister = React.lazy(() => import('../components/admin/register'));
export const AdminList = React.lazy(() => import('../components/admin/table-user-mngr'));
export const DocenteCalendar = React.lazy(() => import('../components/docente/calendar'));
export const DocenteCreate = React.lazy(() => import('../components/docente/create-request'));
export const DocenteDash = React.lazy(() => import('../components/docente/dashboard'));
export const DocenteHistory = React.lazy(() => import('../components/docente/history-requests'));
export const CheckRequest = React.lazy(() => import('../components/miembro/check-request'));
export const TableRequests = React.lazy(() => import('../components/miembro/table-requests'));