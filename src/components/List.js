import React from 'react';

const List = () => {

      return (
            <table className="ui celled table">
                  <thead>
                        <tr>
                              <th>Route Name</th>
                              <th>Setter</th>
                              <th>Grade</th>
                              <th>Type (TR, Lead, Boulder)</th>
                              <th>Rating</th>
                              <th>Options</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td data-label="Route Name">Oh my</td>
                              <td data-label="Setter">John</td>
                              <td data-label="Grade">5.12b</td>
                              <td data-label="Type">Lead, TR</td>
                              <td data-label="Rating">5 stars</td>
                              <td data-label="Options">
                                    <button type="button" className="ui button">Delete</button>
                                    <button type="button" className="ui button">Comment</button>
                              </td>
                        </tr>
                  </tbody>
            </table>
      );

}

export default List;
