import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import "./navBar.css"
import melt from "../../images/cold.png"
class NavBar extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav id="nav" style={{backgroundColor:"white"}}className="navbar fixed-top flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <h1 id="h1">  <i className="fas fa-home">  </i></h1>
            </Link>
          </li>
        </ul>
        <button
        type="button"
        > <img id="icon" src={melt}/></button>
        <Button
          id="logout"
          type="button"
          onClick={this.logout}>
          Logout
        </Button>
      </nav>
    )
  }
}

export default NavBar
