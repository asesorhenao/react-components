import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User user={user} />
        <UsersList list={persons} />
      </header>
    </div>
  );
};

const Avatar = props => <img src={props.user.img} alt={props.user.name} />;
const UserName = props => <p>{props.user.name}</p>;

const User = props => {
  return (
    <div>
      <Avatar user= {props.user} />
      <UserName user = {props.user} />
    </div>
  )
};

const UsersList = props => {
  const userlist =props.list.map((user,i) => <User user={user} key={i} />);
  return (
    <div className="user-list">
      {userlist}
    </div>
  )
};

const user = {
  name: 'Alexander Henao',
  img: logo
};


const persons = [
  {
    name: 'Carlos',
    img: 'https://picsum.photos/100/100'
  },
  {
    name: 'Pedro',
    img: 'https://picsum.photos/100/100'
  },
  {
    name: 'Sergio',
    img: 'https://picsum.photos/100/100'
  },
  {
    name: 'David',
    img: 'https://picsum.photos/100/100'
  }
]
export default App;
