import { useState } from 'react';
import './App.css';
import User from './user';

export interface UserType {
  name: string,
  email: string,
  password: string
}

function App() {
  const [user, setUser] = useState<UserType>({ name: 'bac11', email: '123@gmail.com', password: '123' })
  return (
    <User user = {user} />
  );
}

export default App;