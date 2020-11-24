import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import FirebaseContext from '../firebase/context';
import './AddRoute.css';

const AddRoute = () => {
      // const { register, handleSubmit, errors } = useForm();
      const { firebase } = useContext(FirebaseContext);
      const [route, setRoute] = useState('');
      const [setter, setSetter] = useState('');
      const [grade, setGrade] = useState('');
      const [type, setType] = useState('');

      const { register, handleSubmit, errors } = useForm();

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
            <div>
                  <form className="ui form" onSubmit={handleSubmit(handleCreateRoute)}>
                        <div className="fields">
                              <div className="field">
                                    <label htmlFor="Route">Route name</label>
                                    <input
                                          type="text"
                                          name="route"
                                          id="route"
                                          placeholder="Route name"
                                          onChange={e => setRoute(e.target.value)}
                                          aria-invalid={errors.route ? "true" : "false"}
                                          ref={register({ required: true })}
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
                                          aria-invalid={errors.setter ? "true" : "false"}
                                          ref={register({ required: true })}
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
                                          aria-invalid={errors.grade ? "true" : "false"}
                                          ref={register({ required: true })}
                                          value={grade}
                                    />
                              </div>
                              <div className="field">
                                    <label htmlFor="type">Type (TR, Lead, Boulder)</label>
                                    <input
                                          type="text"
                                          name="type"
                                          id="type"
                                          placeholder="Type"
                                          onChange={e => setType(e.target.value)}
                                          aria-invalid={errors.grade ? "true" : "false"}
                                          ref={register({ required: true })}
                                          value={type}
                                    />
                              </div>
                        </div>
                        <button className="ui button" type="submit">Add Route</button>
                  </form>
                  { (errors.route || errors.setter || errors.grade || errors.type) && (
                        <span className="alert-text" role="alert">All fields are required</span>
                  )}
            </div>

      );
}

export default AddRoute;
