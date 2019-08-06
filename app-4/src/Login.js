import React from 'react'

class Login extends React.Component {

    constructor() {
        super() 
    
        this.state = {
          password: '',
          username: '',
        }
      }
    
      changePass = (event) => {
    
        this.setState({
          password: event.target.value
        })
      }
    
      changeUser = (event) => {
    
        this.setState({
          username: event.target.value
        })
      }
    
      login = () => {
    
        alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
      }
    
      render() {
        return (
          <div>
            <input type="text" onChange={ this.changeUser } />
            <input type="password" onChange={ this.changePass } />
            <button onClick={ this.login }>Login</button>
          </div>
        );
      }
}

export default Login