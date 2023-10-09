import React, { useState } from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredAge.trim().length == 0 || enteredUsername.trim().length == 0 ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( >0)."
      })
      return
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("")
    setEnteredAge("")
  };
  const handleUsernameChange = (event) => {setEnteredUsername(event.target.value)}
  const handleAgeChange = (event) => {setEnteredAge(event.target.value)}

  const errorHandler = () => {
    setError(null)
  }
  return (
    <>

    {error && <ErrorModal title = {error.title} message = {error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={handleUsernameChange} />
        <label htmlFor="age">Age</label>
        <input type="number" id="username" value={enteredAge} onChange={handleAgeChange} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
