import React from 'react';

const AddRoute = () => {
      return (
            <form className="ui form">
                  <div className="fields">
                        <div className="field">
                              <label>Route Name</label>
                              <input type="text" name="route-name" placeholder="Route" />
                        </div>
                        <div className="field">
                              <label>Setter</label>
                              <input type="text" name="setter" placeholder="Setter" />
                        </div>
                        <div className="field">
                              <label>Grade</label>
                              <input type="text" name="grade" placeholder="Grade" />
                        </div>
                        <div className="field">
                              <label>Type (TR, Lead, Boulder)</label>
                              <input type="text" name="type" placeholder="Type" />
                        </div>
                  </div>
                  <button className="ui button" type="submit">Add Route</button>
            </form>
      );
}

export default AddRoute;
