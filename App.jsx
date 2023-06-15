//crear componente
import React, { useEffect, useState } from 'react';
import './App.css' 

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  
  return (


    
    <div className="App">
      
      {data.map(user => (
        
        <div key={user.id} className="user">
                  <h1 class="card-title">{user.name} </h1>
  <img className='image' src={`https://robohash.org/${user.id}`} alt="avatar"/>

  <div className="continfo">
          <p  >{user.email}</p> 
          <p >{user.address.city}</p> 
          <p >{user.company.name}</p>  
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;