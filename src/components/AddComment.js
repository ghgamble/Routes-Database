import React, { useState } from 'react';
import { Button, Modal, Header, Form } from 'semantic-ui-react'

import FirebaseContext from '../firebase/context';

const AddComment = ({ route }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  const handleClick = e => {
    console.log('clicked ', route);
  }

  const handleCreateComment = e => {
    console.log(comment);
    setComment('');
    setSuccess(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
    setTimeout(() => {
      setSuccess(false);
    }, 3000)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Comment</Button>}
    >
      <Modal.Header>Add comment for: {route.route}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleCreateComment}>
            <Form.Group widths='equal'>
              <Form.Input
                value={comment}
                label='Comment'
                type='text'
                onChange={e => setComment(e.target.value)}
              />
            </Form.Group>
          </Form>
          {success === true && <p>Comment added succesfully!</p>}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddComment;
