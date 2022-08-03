import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="# " target="_blank" rel="noopener noreferrer">
          Colégio Rejuma
        </a>
        <span className="ms-1">&copy; Ano Lectivo 2023.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">C.R</span>
        <a href="# " target="_blank" rel="noopener noreferrer">
          Sistema de Gerenciamento da Instituição
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
