import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
  };

  onclick = (id)  => {
    this.shuffle();
    this.updateCount(id);
    this.increaseScore(id);
  }
  
  updateCount = (id) => {
    this.state.friends.find( (x) => {
        if ( id === x.id ) {
          if ( x.count === 0) {
            console.log("this is x" + x);
            x.count ++;
            this.increaseScore();
            this.shuffle();
          }
          else {
            this.startOver(id) 
          }
        }
    });
  }

  shuffle = () => {
    this.state.friends.sort( ()=> {return Math.random() - 0.5;});
  }

  startOver = ()  => {

    console.log(this.state.score + "startOver function");
    this.state.friends.sort( ()=> {return Math.random() - 0.5;});
    alert("wah wah... START OVER");
    if ( this.state.score > this.state.highScore ) {
      this.state.highScore = this.state.score
    }
    this.state.score = 0;
    this.state.friends.forEach( function(element) {
      element.count = 0;
    });
  }

  // defineName = () =>
  
  increaseScore = () => {
    //when youre manipulating something in state NEED TO use 'setState'
    console.log("Before: " + this.state.score );
    this.setState({
      score: this.state.score++
    });
    console.log("after: " + this.state.score );

  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          highScore={this.state.highScore}
          name={this.state.name}
        />
        {/* <Title>Clickky Game</Title> */}
        {this.state.friends.map(friend => (

          <FriendCard
            id={friend.id}
            name={friend.name}
            image={friend.image}
            onclick={this.onclick}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
