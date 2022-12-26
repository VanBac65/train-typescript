import { FC, ReactElement } from 'react'
import { UserType } from './App';
import './App.css';

const User = (user:UserType): ReactElement => {
    return (
        <div className="App">
            Name<input type='text' name='name' defaultValue={user.name} />
            Email<input type='text' name='email' defaultValue={user.email} />
            Password<input type='text' name='password' defaultValue={user.password} />
        </div>
    );
}

export default User;