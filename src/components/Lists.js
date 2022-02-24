import React from 'react';

const Lists = ({ usernames }) => {
  return (
      <div>
          {usernames ? <ul>
              {usernames.map(users => (
                  <li key={users.id}>{users.name}</li>
              ))}
          </ul> 
          : <div></div> }
      </div>
  )
};

export default Lists;
