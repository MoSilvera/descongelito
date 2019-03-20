import React, { Component } from "react"
import Nav from "./nav/Nav"
import ApplicationViews from "./ApplicationViews"
import UserManager from "../modules/resourceManager/utilities/UserManager"
import { withRouter }from "react-router-dom"


class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {
    UserManager.get(this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
    )
  }
  activeUserId = () => parseInt(sessionStorage.getItem("credentials"))

  render() {
    return (
      <React.Fragment>
        <Nav setAuth={this.props.setAuth} activeUser={this.state.activeUser} />
        <div className="appContainer">
        <ApplicationViews
          activeUserId={this.activeUserId}
          activeUser={this.state.activeUser}
        />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(UserAccessLayer)
