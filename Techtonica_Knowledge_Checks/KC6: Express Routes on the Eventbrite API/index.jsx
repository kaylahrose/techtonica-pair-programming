// example of frontend with React

import React, { useEffect, useState } from 'react';

function UserDetails({ userId }) {
 const [user, setUser] = useState(null);

 useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
 }, [userId]);

 return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 );
}
