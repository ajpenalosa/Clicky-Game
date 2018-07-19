import React, { Component } from "react";
import Nav from "./components/Nav"
import CarCard from "./components/CarCard";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer/Footer";
import cars from "./cars.json";

class App extends Component {
  state = {
    cars: cars
  };

  shuffleCars = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there are still items to shuffle
    while (0 !== currentIndex) {

      // Pick a remaining item
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current item
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  clickCar = () => {
    console.log("CLICKED!!!");
    this.setState({ cars: cars });
  }

  render() {
    let cars = this.shuffleCars(this.state.cars);
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {cars.map((car, id) => (
              <CarCard
                id={id}
                key={id}
                alt={car.alt}
                image={car.image}
                clickCar={this.clickCar}
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
