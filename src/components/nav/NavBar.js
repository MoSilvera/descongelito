import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'reactstrap';
import "./navBar.css"
import melt from "../../images/cold.png"
import {withRouter} from 'react-router-dom';
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
            <button className="nav-link"
             onClick={() => this.props.history.goBack()}>
            <h1 id="h1"><i class="far fa-arrow-alt-circle-left"></i></h1>
            </button>
          </li>
        </ul>
        <Link
        type="button"
        to="/"
        > <img alt="thermometer" id="icon" src={melt}/></Link>
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

export default withRouter(NavBar);
