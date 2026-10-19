import express, { response } from "express";

const app = express();

export default app;

app.get("/", (request, response) => {
  response.send("Hello employees!");
});
