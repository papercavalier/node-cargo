const { io } = require("socket.io-client");

const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("scale", (value) => {
  console.log("Scale:", value);
});

socket.on("disconnect", () => {
  console.log("Disconnected");
});
