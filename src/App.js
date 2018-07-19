import React, { Component } from "react";
import CarCard from "./components/CarCard";
import cars from "./cars.json";

class App extends Component {
  state = {
    cars
  };

  render() {
    return (
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
    );
  }
}

export default App;
