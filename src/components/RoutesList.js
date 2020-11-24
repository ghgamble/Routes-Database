import React, { useContext, useState, useEffect } from 'react';

import FirebaseContext from '../firebase/context';

const List = () => {
      const { firebase } = useContext(FirebaseContext);
      const [routes, setRoutes] = useState([]);

      useEffect(() => {
            firebase.db.collection('routes').orderBy('created', 'asc').onSnapshot(snapshot => {
                  const routes = snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() };
                  })
                  setRoutes(routes);
            })
      }, [firebase.db])

      const handleDelete = (e) => {
            const id = e.currentTarget.getAttribute("data-route");
            const routeRef = firebase.db.collection('routes').doc(id);
            routeRef.delete().then(() => {
                  console.log(`Document with ID ${id} deleted`);
            }).catch(error => {
                  console.error('Error deleting document: ', error);
            })
      }

      return (
            <table className="ui celled table">
                  <thead>
                        <tr>
                              <th>Route Name</th>
                              <th>Setter</th>
                              <th>Grade</th>
                              <th>Type (TR, Lead, Boulder)</th>
                              <th>Options</th>
                        </tr>
                  </thead>
                  <tbody>
                        {routes.map((route, index) => (
                              <tr index={index} key={route.id}>
                                    <td data-label="Route name">{route.route}</td>
                                    <td data-label="Setter">{route.setter}</td>
                                    <td data-label="Grade">{route.grade}</td>
                                    <td data-label="Type">{route.type}</td>
                                    <td data-label="Options">
                                          <button type="button" className="ui button" data-route={route.id} onClick={handleDelete}>Delete</button>
                                          <button type="button" className="ui button">Comment</button>
                                    </td>
                              </tr>
                        ))}
                  </tbody>
            </table>
      );

}

export default List;
