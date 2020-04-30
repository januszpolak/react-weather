import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const KEY = ""; //klucz do API Openweathermap.org

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}
    &appid=${KEY}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();

        this.setState({
          err: false,
          date: time,
          city: data.name, // lub this.state.value aby nie było angielskich nazw miast
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: true,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
