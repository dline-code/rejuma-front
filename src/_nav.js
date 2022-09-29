import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilCursor, cilNotes, cilStar, cilPeople, cilEducation } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Colégio Rejuma',
  },
  {
    component: CNavGroup,
    name: 'Estudantes',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cadastro',
        to: '/cadastro',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Matrícula',
        to: '/matriculas',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ensino Primário',
        to: '/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Iº cíclo',
        to: '/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'IIº cíclo',
        to: '/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Funcionários',
    to: '/funcionarios',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Produtos',
    to: '/produtos',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Propinas',
    to: '/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
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
