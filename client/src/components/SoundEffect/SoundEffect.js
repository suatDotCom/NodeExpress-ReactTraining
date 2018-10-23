import React, { Component } from "react";
import typeSound from "../../assets/sound/typing.mp3";

// var audio = {};
function playAudio(options) {
  var audio = new Audio(typeSound);
  audio.play();

  // audio[options.name] = new Audio(options.url);
  // audio[options.name].play();
}

// function stopAudio(options) {
//   audio[options.name].stop();

//   delete audio[options.name];
// }
// var options = {};

export class SoundEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      url: this.props.url
    };
  }

  componentDidMount() {
    playAudio(this.state);
  }

  render() {
    return <div />;
  }
}

export default SoundEffect;
