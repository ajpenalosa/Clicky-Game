import React, { Component } from "react";
import Nav from "./components/Nav"
import CarCard from "./components/CarCard";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import cars from "./cars.json";

class App extends Component {
  state = {
    cars: cars,
    clicked: [],
    wrapperClass: "wrapper",
    score: 0,
    topScore: 0
  };

  message = "Click an image to begin!";

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
  };

  // Click method when an image is clicked
  clickCar = id => {

    // Push the ID into the clicked array if it doesn't exist
    if(this.state.clicked.indexOf(id) === -1 ) {
      this.state.clicked.push(id);
      console.log(this.state.clicked);

      this.message = "You guessed correctly!";

      let newScore = this.state.score + 1;
      let newTopScore;

      // If the score is greater than the top score
      if (newScore > this.state.topScore) {
        // Add 1 to top score
        newTopScore = this.state.topScore + 1;
      }
      else {
        // Else keep top score equal to top score
        newTopScore = this.state.topScore;
      }

      this.setState({
        // Add 1 to the score
        score: newScore,
        // Add 1 to the top score
        topScore: newTopScore,
        wrapperClass: "wrapper"
      });

      console.log("score: " + this.state.score);
      console.log("top score: " + this.state.score);
    }
    else {

      this.message = "You guessed incorrectly!!"
      // Reset score and clicked array
      this.setState({
        score: 0,
        clicked: [],
        wrapperClass: "wrapper wrong"
      });
    }
  };

  render() {
    let cars = this.shuffleCars(this.state.cars);
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.message}
         />
        <Jumbotron />
        <Wrapper
          class={this.state.wrapperClass}
        >
          {cars.map(car => (
            <CarCard
              id={car.id}
              key={car.id}
              alt={car.alt}
              image={car.image}
              clickCar={this.clickCar}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
