// api.openweathermap.org/data/2.5/weather?q={city name}&appid={d6c9700cd1b3fe1bedf5a0c79be6ac67}

import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
const APIKey = "d6c9700cd1b3fe1bedf5a0c79be6ac67";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    preasure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // handleCitySubmit = (e) => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res;
  //       }
  //       throw Error("Nie udało się");
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const time = new Date().toLocaleString();
  //       this.setState((prevState) => ({
  //         date: time,
  //         city: prevState.value,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         preasure: data.main.pressure,
  //         wind: data.wind.speed,

  //         err: false,
  //       }));
  //     })
  //     .catch((err) => {
  //       this.setState((prevState) => ({
  //         err: true,
  //         city: prevState.value,
  //       }));
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 3) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

      fetch(API)
        .then((res) => {
          if (res.ok) {
            return res;
          }
          throw Error("Nie udało się");
        })
        .then((res) => res.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState((prevState) => ({
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            preasure: data.main.pressure,
            wind: data.wind.speed,

            err: false,
          }));
        })
        .catch((err) => {
          this.setState((prevState) => ({
            err: true,
            city: prevState.value,
          }));
        });
    }
  }

  render() {
    return (
      <div className="app">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
