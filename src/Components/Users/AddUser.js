import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/card";
import classes from "./AddUser.module.css";
import Button from "../UI/button";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredage, setAge] = useState("");
  const [error,setError]=useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age (in years)'
        })
      return;
    }
    if (+enteredage <= 1) {
        setError({
            title:'Invalid age',
            message:'Please enter a valid age (in years)'
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredage);
    //console.log(enteredUsername,enteredage)
    setUsername("");
    setAge("");
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler=(event)=>{
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredage}
          onChange={changeAgeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
