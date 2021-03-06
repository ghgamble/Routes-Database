import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react'

import FirebaseContext from '../firebase/context';

const AddRoute = () => {
  const { firebase } = useContext(FirebaseContext);

  const [route, setRoute] = useState('');
  const [setter, setSetter] = useState('');
  const [grade, setGrade] = useState('');
  const [type, setType] = useState('');

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled( formValidation() );
  }, [route, setter, grade, type]);

  const formValidation = () => {
    if (route === '' || setter === '' || grade === '' || type === '') {
      return true;
    } else {
      return false;
    }
  }

  const handleCreateRoute = e => {
    const newLink = { route, setter, grade, type, comments: [], created: Date.now() };
    firebase.db.collection('routes').add(newLink);
    clearState();
  }

  const clearState = () => {
    setRoute('');
    setSetter('');
    setGrade('');
    setType('');
  }

  return (
    <Form onSubmit={handleCreateRoute} style={{ marginTop: '1em' }}>
      <Form.Group widths='equal'>
        <Form.Input
          value={route}
          label='Route name'
          type='text'
          onChange={e => setRoute(e.target.value)}
        />
        <Form.Input
          value={setter}
          label='Setter'
          type='text'
          onChange={e => setSetter(e.target.value)}
        />
        <Form.Input
          value={grade}
          label='Grade'
          type='text'
          onChange={e => setGrade(e.target.value)}
        />
        <Form.Input
          value={type}
          label='Type'
          type='text'
          onChange={e => setType(e.target.value)}
        />
      </Form.Group>
      <Button disabled={disabled} style={{ marginBottom: '1em' }}>Add Route</Button>
    </Form>
  );
}

export default AddRoute;
