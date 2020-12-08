import React, { useContext } from 'react';
import { Button, Table } from 'semantic-ui-react'

import FirebaseContext from '../firebase/context';
import AddComment from './AddComment';

const RouteDetail = ({ route, index }) => {
  const { firebase } = useContext(FirebaseContext);

  const handleDelete = (e) => {
    const id = e.currentTarget.getAttribute('data-delete');
    const routeRef = firebase.db.collection('routes').doc(id);
    routeRef.delete().then(() => {
      console.log(`Document with ID ${id} deleted`);
    }).catch(error => {
      console.error('Error deleting document: ', error);
    })
  }

  return (
    <Table.Row index={index} key={route.id}>
      <Table.Cell data-label='Route name'>{route.route}</Table.Cell>
      <Table.Cell data-label='Setter'>{route.setter}</Table.Cell>
      <Table.Cell data-label='Grade'>{route.grade}</Table.Cell>
      <Table.Cell data-label='Type'>{route.type}</Table.Cell>
      <Table.Cell data-label='Options'>
        <Button data-delete={route.id} onClick={handleDelete}>Delete</Button>
        <AddComment route={route} />
      </Table.Cell>
      <Table.Cell data-label='Comments'>{route.comments > 0 ? 'comments' : ''}</Table.Cell>
    </Table.Row>
  );
}

export default RouteDetail;
