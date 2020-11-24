import React, { useContext, useState, useEffect } from 'react';

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
            <div style={{ marginTop: "5px" }}>
                  <button className="ui submit button" onClick={handleResetSearch}>Reset Search</button>
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
            </div>
      );

}

export default List;
