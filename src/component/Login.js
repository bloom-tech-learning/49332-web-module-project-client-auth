import React from "react";
import axios from 'axios'

import "./../CSS/user.css"

class Login extends React.Component {
    
      render() {
        
        return (
          <div className="user-container">
                <div className="user-card">
                    <h2>Login Page!</h2>
                    <form className="user-form" onSubmit={this.login}>
                        <div className="user-inputs">
                            <label> Username:
                            <input
                              type="text"
                              name="username"
                              value={this.state.credentials.username}
                              onChange={this.handleChange}
                            />
                            </label>
                        </div>
                        <div className="user-inputs">
                            <label> Password:
                            <input
                                type="password"
                                name="password"
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                              />
                            </label>
                        </div>
                        <button className="home-btn">Login</button>
                    </form>
                    
                </div>
            </div>
        );
      }
    }
export default Login;