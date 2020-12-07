import React, { useContext, useState, useRef, useEffect } from 'react';

import FirebaseContext from '../firebase/context';

const AddRoute = () => {
      const { firebase } = useContext(FirebaseContext);

      const firstRender = useRef(true);

      const [route, setRoute] = useState('');
      const [setter, setSetter] = useState('');
      const [grade, setGrade] = useState('');
      const [type, setType] = useState('');

      const [disabled, setDisabled] = useState(true);

      useEffect(() => {
        if (firstRender.current) {
          firstRender.current = false;
          return;
        }
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
            e.preventDefault();
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
            <div>
                  <form className="ui form" onSubmit={handleCreateRoute}>
                        <div className="fields">
                              <div className="field">
                                    <label htmlFor="Route">Route name</label>
                                    <input
                                          type="text"
                                          name="route"
                                          id="route"
                                          placeholder="Route name"
                                          onChange={e => setRoute(e.target.value)}
                                          value={route}
                                    />
                              </div>
                              <div className="field">
                                    <label htmlFor="setter">Setter</label>
                                    <input
                                          type="text"
                                          name="setter"
                                          id="setter"
                                          placeholder="Setter"
                                          onChange={e => setSetter(e.target.value)}
                                          value={setter}
                                    />
                              </div>
                              <div className="field">
                                    <label htmlFor="grade">Grade</label>
                                    <input
                                          type="text"
                                          name="grade"
                                          id="grade"
                                          placeholder="Grade"
                                          onChange={e => setGrade(e.target.value)}
                                          value={grade}
                                    />
                              </div>
                              <div className="field">
                                    <label htmlFor="type">Type</label>
                                    <input
                                          type="text"
                                          name="type"
                                          id="type"
                                          placeholder="Type"
                                          onChange={e => setType(e.target.value)}
                                          value={type}
                                    />
                              </div>
                        </div>
                        <button className="ui button" type="submit" disabled={disabled}>Add Route</button>
                  </form>
            </div>

      );
}

export default AddRoute;
