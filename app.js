import express from "express";

const app = express();

export default app;

import { getEmployees, getEmployee, getRandomEmployee } from "#db/employees";

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const data = getEmployees();

  res.send(data);
});
app.get("/employees/random", (req, res) => {
  const data = getRandomEmployee();

  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const data = getEmployee(+id);

  if (!data) return res.status(404).send("There is no employee with that id.");

  res.send(data);
});
