import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);

  // Load the data from the server
  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (mounted) {
        setUsers(response.data);
      }
    };

    getUsers();

    return () => { mounted = false; }
  }, []);

  const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');
      setPost(response.data[0].title);
  }

  return (
    <div className="App">
      <div>Users:</div>
      {users.length ? (<>
        <ul data-testid="user-list">
          {users.map(user => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span> <span>{user.username}</span>
            </li>
          ))}
        </ul>
        <button data-testid="get-posts" onClick={getPosts}>click me</button>
        <div data-testid='postholder'>fake{post}</div>
        </>
      ) : (
        <div data-testid="loader">Loading...</div>
      )}
    </div>
  );
}

export default App;
