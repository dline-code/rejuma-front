import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilCursor, cilNotes, cilStar, cilPeople } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Salão',
  },
  {
    component: CNavItem,
    name: 'Agendamentos',
    to: '/appointment',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Funcionários',
    to: '/theme/typography',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Serviços',
    to: '/treatment',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Estatísticas',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Autenticação',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Criar conta',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
