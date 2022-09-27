import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickLogout = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  onClickLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickLogout} />
          ) : (
            <Login login={this.onClickLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
