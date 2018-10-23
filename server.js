const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var path = require("path");
const socketIO = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const io = socketIO(server);

app.set("port", PORT);

io.set("origins", "*:*");

io.on("connection", socket => {
  console.log("connected on server.js !!!!!!!");
  var obj = {
    name: "suat"
  };
  socket.emit("test", obj);
});

app.use(cors());

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

// io.on("connection", socket => {
//   console.log("New client connected");
//   socket.emit("test", "new client connected");
//   // if (interval) {
//     //   clearInterval(interval);
//     // }
//     // interval = setInterval(() => getApiAndEmit(socket), 10000);
//     socket.on("disconnect", () => {
//       console.log("Client disconnected");
//     });

//     socket.on('error', err => {
//       console.log(err);
//     })
// });
