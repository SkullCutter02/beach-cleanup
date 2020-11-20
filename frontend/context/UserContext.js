import React, { Component, createContext } from "react";
import axios from "axios";

export const UserContext = createContext(undefined);

export class UserContextProvider extends Component {
  async componentDidMount() {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/auth/local`,
      {
        identifier: "dummy@gmail.com",
        password: "123456789",
      }
    );
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
