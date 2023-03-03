import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/card";
import classes from "./AddUser.module.css";
import Button from "../UI/button";

const AddUser = (props) => {
    const nameInputRef =useRef();
    const ageInputRef =useRef();
    const collegeInputRef=useRef();
//   const [enteredUsername, setUsername] = useState("");
//   const [enteredage, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    //console.log(nameInputRef.current.value)
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;
    const enteredCollege=collegeInputRef.current.value
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (in years)",
      });
      return;
    }
    if (+enteredAge <= 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (in years)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge,enteredCollege);
    //console.log(enteredUsername,enteredage)
    // setUsername("");
    // setAge("");
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value=''
  };

//   const changeUsernameHandler = (event) => {
//     setUsername(event.target.value);
//   };
//   const changeAgeHandler = (event) => {
//     setAge(event.target.value);
//   };
  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={changeUsernameHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredage}
            // onChange={changeAgeHandler}
            ref={ageInputRef}
          ></input>
          <label htmlFor="username">College Name</label>
          <input
            id="collegename"
            type="text"
            // value={enteredUsername}
            // onChange={changeUsernameHandler}
            ref={collegeInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
