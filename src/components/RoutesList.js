import React, { useContext, useState, useEffect } from 'react';

import FirebaseContext from '../firebase/context';
import RouteDetail from './RouteDetail';

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
                              <RouteDetail index={index} key={route.id} route={route} />
                        ))}
                  </tbody>
            </table>
      );

}

export default List;
