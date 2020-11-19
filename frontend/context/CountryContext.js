import React, { Component, createContext } from "react";

export const CountryContext = createContext(undefined);

export class CountryContextProvider extends Component {
  state = {
    storeCountry: (country) => this.setState({ ...this.state, country }),
    country: "",
  };

  render() {
    return (
      <CountryContext.Provider value={this.state}>
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}
