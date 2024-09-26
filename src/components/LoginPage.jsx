import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { user, login } = useContext(UserContext); 

  useEffect(() => {
    if (user) {
      
      console.log('Fetching data for user:', user.username);
      const fetchedData = { id: 1, name: user.username, email: user.email };
      console.log('User data fetched:', fetchedData);
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    setError(''); 

    
    login(username, email);
    
    
    console.log('Password entered:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
