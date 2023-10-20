import React from 'react'
import { Button, Modal } from 'react-bootstrap'

/**
* @author Adarsh
* @function NewModal
**/

export const NewModal = (props) => {
  return(
    <Modal size={props.size} show={props.show} onSubmit={props.handleSubmit} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.children}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={props.handleSubmit}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
   )

 }