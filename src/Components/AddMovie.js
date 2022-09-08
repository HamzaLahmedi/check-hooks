import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddMovie({addMovie}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(1);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd =()=>{
    addMovie({title,description,posterUrl,rate,id:Math.random()});handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form>
            <FormControl type='text' placeholder='enter title' onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <FormControl type='text' placeholder='enter description' onChange={(e)=>setDescription(e.target.value)}/>
            <br/>
            <FormControl type='text' placeholder='enter posterUrl' onChange={(e)=>setPosterUrl(e.target.value)}/>
            <br/>
            <FormControl type='number' placeholder='enter rate' onChange={(e)=>setRate(e.target.value)}/>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;