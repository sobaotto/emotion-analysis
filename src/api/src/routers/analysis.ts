import * as express from "express";
import { quickstart } from "../emotion-analysis";

const analysisRouter = express.Router();

const endPoint: string = "/analysis";

analysisRouter
  .route(endPoint)
  .get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.json({ message: "GET method" });
  })
  .post(async (req, res) => {
    const analyzedText = req.body.text;

    console.log("1");

    const sentiment = await quickstart(analyzedText);
    console.log("2");

    // console.log(`Text: ${text}`);
    // console.log(`Sentiment score: ${sentiment.score}`);
    // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);

    res.header("Access-Control-Allow-Origin", "*");

    res.json({
      message: `POST method`,
      Text: analyzedText,
      SentimentScore: sentiment.score,
      SentimentMagnitude: sentiment.magnitude,
    });
  });

analysisRouter
  .route(`${endPoint}/:id`)
  .put((req, res) => {
    res.json({ message: `PUT method ID: ${req.params.id}` });
  })
  .delete((req, res) => {
    res.json({ message: `DELETE method ID: ${req.params.id}` });
  });

export { analysisRouter };
