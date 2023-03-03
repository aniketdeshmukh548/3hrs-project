import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/Userslist';


function App() {
  const [usersList,setUserslist]=useState([])
  const addUserHandler=(uNmae,uAge,uCollege)=>{
    setUserslist((prevUserList)=>{
      return [...prevUserList,{id:Math.random().toString(), name:uNmae,age:uAge,college:uCollege}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
    </>
  );
}

export default App;
