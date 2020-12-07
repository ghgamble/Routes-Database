import React, { useContext, useState, useEffect } from 'react';

import { Container, Button, Table } from 'semantic-ui-react'

import FirebaseContext from '../firebase/context';
import RouteDetail from './RouteDetail';

const List = ({ term }) => {
  const { firebase } = useContext(FirebaseContext);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (term !== '') {
      const query = term.toLowerCase();
      const matchedRoutes = routes.filter(route => {
        return route.route.toLowerCase().includes(query) ||
        route.setter.toLowerCase().includes(query) ||
        route.grade.toLowerCase().includes(query) ||
        route.type.toLowerCase().includes(query)
      })
      setRoutes(matchedRoutes);
    }
  }, [term])

  useEffect(() => {
    getAllRoutes();
  }, [])

  const getAllRoutes = () => {
    firebase.db.collection('routes').orderBy('created', 'asc').onSnapshot(snapshot => {
      const routes = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      })
      setRoutes(routes);
    })
  }

  const handleResetSearch = () => {
    getAllRoutes();
  }

  return (
    <Container style={{ marginTop: '5px' }}>
      <Button onClick={handleResetSearch}>Reset List</Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Route Name</Table.HeaderCell>
            <Table.HeaderCell>Setter</Table.HeaderCell>
            <Table.HeaderCell>Grade</Table.HeaderCell>
            <Table.HeaderCell>Type (TR, Lead, Boulder)</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {routes.map((route, index) => (
            <RouteDetail index={index} key={route.id} route={route} />
          ))}
        </Table.Body>
      </Table>
    </Container>
  );

}

export default List;
