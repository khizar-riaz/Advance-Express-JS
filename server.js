const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");

const FeedbckService = require("./services/FeedbackService");
const SpeakersService = require("./services/SpeakerService");

const feedbackService = new FeedbckService("./data/feedback.json");
const speakersService = new SpeakersService("./data/speakers.json");

const routes = require("./routes");

const app = express();

const port = 3000;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: "session",
    keys: ["Ghdur68739923", "hhjjeeesshhj6789"],
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use(
  "/",
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
