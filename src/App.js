import React, { Component } from "react";
import Nav from "./components/Nav"
import CarCard from "./components/CarCard";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer/Footer";
import cars from "./cars.json";

class App extends Component {
  state = {
    cars
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.state.cars.map((car, id) => (
              <CarCard
                id={id}
                key={id}
                alt={car.alt}
                image={car.image}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
