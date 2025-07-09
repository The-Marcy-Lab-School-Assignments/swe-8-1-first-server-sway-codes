const express = require("express");
const app = express();

const servePicture = (req, res) => {
  res.send({
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/meowntain-profile_banner-71b7a6d0d943dc9e-480.jpeg",
  });
};

const serveJoke = (req, res) => {
  res.send({
    setup: "if shakesphere wrote a story about Marcy, would it be called?",
    punchline: "a fellow. OH BROTHER THIS GUY STINKS",
  });
};

const serveRoll = (req, res) => {
  const { quantity } = req.query;
  const length = Number(quantity) > 0 ? Number(quantity) : 1;
  const rolls = []; 
  for (let i = 0; i< length; i++){
    const roll = Math.ceil(Math.random() * 6);
     rolls.push(roll)
  }
  res.send(rolls)
};

app.get("/api/picture", servePicture);
app.get("/api/joke", serveJoke);
app.get("/api/rollDie", serveRoll)

const port = 8080;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

//  MIDDLEWARE FUNCTION
const logRoutes = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();
  console.log(`[${time}] ${method} request to ${url}`);
  next(); // lets the request continue to the route handler
};


app.use(logRoutes);



