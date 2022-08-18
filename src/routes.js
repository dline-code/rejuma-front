import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Matriculas = React.lazy(() => import('./views/matriculas'))
const NewMatricula = React.lazy(() => import('./views/matriculas/new'))
const Propinas = React.lazy(() => import('./views/propinas'))
const PropinaDetails = React.lazy(() => import('./views/propinas/details'))
const NewPropinaPayment = React.lazy(() => import('./views/propinas/new'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/matriculas', name: 'Matrículas', component: Matriculas, exact: true },
  { path: '/matriculas/create', name: 'Criar Matricula', component: NewMatricula },
  { path: '/propinas', name: 'Propinas', component: Propinas },
  { path: '/propinas/:id', name: 'Propinas - Detalhes', component: PropinaDetails },
  {
    path: '/propinas/create',
    name: 'Adicionar Novo Pagamento de Propinas',
    component: NewPropinaPayment,
  },
]

export default routes
