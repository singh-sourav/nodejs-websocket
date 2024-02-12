const express = require("express");
const WebSocket = require("ws");

const app = express();

app.use(express.static("public"));

const server = app.listen(3000);
console.log("Listening on 3000....");

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received message: %s", message);

    ws.send("Hello, world!");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

/*
Client Code
------------
const ws = new WebSocket("ws://localhost:3000")
ws.send("hello")
ws.onmessage = (data) => console.log(data)
*/
