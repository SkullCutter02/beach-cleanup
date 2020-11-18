import React, { Component, createContext } from "react";
import axios from "axios";

export const UserContext = createContext(undefined);

export class UserContextProvider extends Component {
  async componentDidMount() {
    const { data } = await axios.post("http://localhost:1337/auth/local", {
      identifier: "dummy@gmail.com",
      password: "123456789",
    });
    this.setState(data);
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
