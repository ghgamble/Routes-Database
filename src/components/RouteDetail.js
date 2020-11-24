import React, { useContext } from 'react';

import FirebaseContext from '../firebase/context';

const RouteDetail = ({ route, index }) => {

      const { firebase } = useContext(FirebaseContext);

      const handleDelete = (e) => {
            const id = e.currentTarget.getAttribute("data-delete");
            const routeRef = firebase.db.collection('routes').doc(id);
            routeRef.delete().then(() => {
                  console.log(`Document with ID ${id} deleted`);
            }).catch(error => {
                  console.error('Error deleting document: ', error);
            })
      }

      return (
            <tr index={index} key={route.id}>
                  <td data-label="Route name">{route.route}</td>
                  <td data-label="Setter">{route.setter}</td>
                  <td data-label="Grade">{route.grade}</td>
                  <td data-label="Type">{route.type}</td>
                  <td data-label="Options">
                        <button type="button" className="ui button" data-delete={route.id} onClick={handleDelete}>Delete</button>
                  </td>
            </tr>
      );
}

export default RouteDetail;
