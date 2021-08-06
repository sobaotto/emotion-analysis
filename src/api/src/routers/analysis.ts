import * as express from "express";
// import { quickstart } from "../emotion-analysis";

const analysisRouter = express.Router();

const endPoint: string = "/analysis";

analysisRouter
  .route(endPoint)
  .get((req, res) => {
    res.json({ message: "GET method" });
  })
  .post(async (req, res) => {
    const reqBody = JSON.parse(req.body);
    const analyzedText = reqBody.text;

    console.log("1");
    // const sentiment = await quickstart(analyzedText);
    console.log("2");

    console.log(`Text: ${analyzedText}`);
    // console.log(`Sentiment score: ${sentiment.score}`);
    // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);

    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );

    res.json({
      message: `POST method`,
      Text: "analyzedText",
      SentimentScore: "sentiment.score",
      SentimentMagnitude: "sentiment.magnitude",
    });

    // res.json({
    //   message: `POST method`,
    //   Text: analyzedText,
    //   SentimentScore: sentiment.score,
    //   SentimentMagnitude: sentiment.magnitude,
    // });
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
