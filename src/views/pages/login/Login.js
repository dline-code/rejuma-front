import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Alunos from '../../../assets/images/alunos.jpg'
import { registerables } from 'chart.js'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = () => {
    setLoading(true)
    const loginData = {
      contact,
      password,
    }
  }

  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${Alunos})`,
        backgroundSize: 'cover',
        backgroundColor: 'red',
      }}
      blurRadius={6}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Iniciar Sessão</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(event) => setContact(event.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton disabled={loading || false} onClick={handleSubmit}>
                          {loading && (
                            <CSpinner
                              component="span"
                              size="sm"
                              variant="grow"
                              aria-hidden="true"
                            />
                          )}
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu sua senha?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Criar conta</h2>
                    <p>Bem-vindo ao rejuma, o melhor ensino você encontra aqui.</p>
                    <CButton color="primary" className="mt-3" active tabIndex={-1}>
                      Criar uma conta!
                    </CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
