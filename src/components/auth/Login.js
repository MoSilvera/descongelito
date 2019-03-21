import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/resourceManager/utilities/UserManager"
import Register from "./Register"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    userName: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      userName: this.state.userName,
      password: this.state.password
    }
    if (this.state.userName && this.state.password) {
      UserManager.searchUsername(this.state.userName).then(users => {
        if (users.length) {
          alert(`Username ${this.state.userName} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.userName && this.state.password) {
      UserManager.searchUP(this.state.userName, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="userName"
          id="userName"
          placeholder={` Username`}
          required=""
          autoFocus=""
        />
        <hr></hr>
        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={` password `}
          required=""
        />
        <button type="submit" onClick={this.handleLogin}>
          Sign in
        </button>
       <Register setAuth={this.props.setAuth}/>
      </form>
    )
  }
}
