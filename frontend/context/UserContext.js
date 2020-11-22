import React, { Component, createContext } from "react";
import axios from "axios";

export const UserContext = createContext(undefined);

export class UserContextProvider extends Component {
  state = {
    data: null,
    setData: (data, pass) => {
      this.setState({ ...this.state, data: data });
      localStorage.setItem("identifier", data.user.email);
      localStorage.setItem("password", pass);
      localStorage.setItem("username", data.user.username);
    },
  };

  async componentDidMount() {
    // const pass = "123456789";
    if (
      localStorage.getItem("identifier") !== null ||
      localStorage.getItem("password") !== null
    ) {
      // {
      //   // const { data } = await axios
      //   //   .post(`${process.env.NEXT_PUBLIC_HOST}/auth/local`, {
      //   //     identifier: "dummy@gmail.com",
      //   //     password: pass,
      //   //   })
      //   //   .catch((err) => console.log(err));
      //   // localStorage.setItem("identifier", data.user.email);
      //   // localStorage.setItem("password", pass);
      //   // this.setState(data);
      // } else
      const { data } = await axios
        .post(`${process.env.NEXT_PUBLIC_HOST}/auth/local`, {
          identifier: localStorage.getItem("identifier"),
          password: localStorage.getItem("password"),
        })
        .catch((err) => console.log(err));
      this.setState({ ...this.state, data: data });
    } else {
      localStorage.clear();
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
