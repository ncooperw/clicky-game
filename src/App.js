import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import JordanCard from "./components/JordanCard";
import Footer from "./components/Footer";
import jordans from "./jordans.json";
import './App.css';
// import Column from "./Column";

class App extends Component {
  state = {
    jordans,
    score: 0,
    topScore: 0,
    clickedJordan: [],

  };

  //when you click on a card ... the Jordan is taken out of the array
  imageClick = event => {
    const currentJordan = event.target.alt;
    const jordanAlreadyClicked = this.state.clickedJordan.indexOf(currentJordan) > -1;

    //if you click on a jordan that has been clicked the game is reset and cards reordered
    if (jordanAlreadyClicked){
      this.setState({
        jordans: this.state.jordans.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedJordan: [],
        score: 0,
        topScore: this.state.topScore
      });
      alert("You lose. Play again?");

    //if you click on an available Jordan, your score is increased and cards reordered
    
    } else {
      this.setState(
        {
        jordans: this.state.jordans.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedJordan: this.state.clickedJordan.concat(
          currentJordan
        ),
        score: this.state.score +1,
        topScore: this.state.topScore +1
      },
      //if you get all of the jordans correct you get a congrats message and the game resets
      () => {
        if (this.state.score === 9) {
          alert("Sweet! You Win!");
          console.log(this.state.topScore);
          console.log(this.state.score);
          this.setState({
            jordans: this.state.jordans.sort(function(a, b){
              return 0.5 - Math.random();
            }),
            clickedJordan: [],
            score: 0,
            topScore: this.state.topScore,
          
          });
        }
      }
      );
    
  } 


  };

  gameReset = () => {

  }

  render() {
    return (
      <div className="App">
      <Navbar score={this.state.score} topScore={this.state.topScore}/>
      <Jumbotron />
      <div className="flex-container">
      {this.state.jordans.map(jordans => (
        <JordanCard 
        imageClick={this.imageClick}
        id={jordans.id}
        key={jordans.id}
        image={jordans.image}
        />
      ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
