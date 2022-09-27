const Message = props => {
  const {isLoggedIn} = props

  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1>{message}</h1>
}

export default Message
