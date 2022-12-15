const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

//database connection
mongoose
  .connect(
    "mongodb+srv://pooja1012:pqfk5cer6smsnwsm@cluster0.ppwwi.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// api to get the data
app.get("/", (req, res) => {
  const data = [];
  const source =
    '{"id":"bin","name":"bin","props":{"droppable":true},"children":[{"id":"user","name":"user","props":{"droppable":true}},{"id":"bravo","name":"Bravo","props":{"droppable":true},"children":[{"id":"charlie","name":"Charlie","props":{"droppable":true},"children":[{"id":"home","name":"home","props":{"droppable":true},"children":[{"id":"echo","name":"Echo","props":{"droppable":true}},{"id":"foxtrot","name":"Foxtrot","props":{"droppable":true}}]},{"id":"golf","name":"Golf","props":{"droppable":true}}]},{"id":"hotel","name":"Hotel","props":{"droppable":true},"children":[{"id":"india","name":"India","props":{"droppable":true},"children":[{"id":"juliet","name":"Juliet","props":{"droppable":true}}]}]},{"id":"kilo","name":"Kilo","loadOnDemand":true,"props":{"droppable":true}}]}]}';
  for (let i = 0; i < 1000; ++i) {
    data.push(
      JSON.parse(
        source.replace(/"(id|name)":"([^"]*)"/g, '"$1": "$2.' + i + '"')
      )
    );
  }
  res.json(data);
});

app.listen(9000);
