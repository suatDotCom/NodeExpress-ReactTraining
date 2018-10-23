import React, { Component } from "react";
import socketIOClient from "socket.io-client";

export class SocketConnection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    socket.on("connection", () => {
      console.log("connected on client side!");
    });

    socket.on("test", data => {
        console.log(data)
    })

    socket.on("disconnect", () => {
      console.log("disconnected !");
    });
  }

  render() {
    return <div />;
  }
}

export default SocketConnection;
