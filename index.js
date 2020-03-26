const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
  });
  
  // Mock APIs
  app.get("api/users", (req, res) => {
    res.json([
      { name: "William", location: "Abu Dhabi" },
      { name: "Chris", location: "Vegas" }
    ]);
  });
  app.get("/api", (req, res) => {
    res.json([
      { name: "API" }
    ]);
  });

  app.get("api/clients", (req, res) => {
    res.json([
      { name: "client 1", location: "USA" },
      { name: "Chris", location: "Vegas" }
    ]);
  });
  
  app.post("/user", (req, res) => {
    const { name, location } = req.body;
    res.send({ status: "User created", name, location });
  });
  
// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000. Yeah OK`);
});