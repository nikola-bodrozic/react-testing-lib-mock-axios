import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState([]);

  // Load the data from the server
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };

    getUsers();
  }, []);

  const getTitle = async (id) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id+'/posts');
    setTitle(response.data[0].title);
  }

  return (
    <div className="App">
      <div data-testid="ancestor" role='usersWrap'><span data-testid="descendant">Users:</span></div>
      {users.length ? (<>
        <ul data-testid="user-list">
          {users.map(user => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span> <span>{user.username}</span> <button data-testid="get-posts" onClick={()=>getTitle(user.id)}>Show one title</button>
            </li>
          ))}
        </ul>
        <hr width='80%'/>
        <div data-testid='title-holder'>{title}</div>
      </>
      ) : (
        <div data-testid="loader">Loading...</div>
      )}
    </div>
  );
}

export default App;
