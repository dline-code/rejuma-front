/* eslint-disable prettier/prettier */
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,

  } from '@coreui/react'
  import React from 'react'

  function NewProduto() { 
    return (
      <CModal
          className="show d-block position-static"
          backdrop={false}
          keyboard={false}
          portal={false}
          visible
        >
        <CModalHeader>
          <CModalTitle>React Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>React Modal body text goes here.</CModalBody>
        <CModalFooter>
          <CButton color="secondary">Close</CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    )
  }
  
  export default NewProduto;