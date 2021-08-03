import * as functions from "firebase-functions";
import { quickstart } from "./emotion-analysis";
import * as express from "express";
import { router as messagesRouter } from "./routers/messages/route";

const app = express();
app.use("/", messagesRouter);

export const api = functions.region("asia-northeast1").https.onRequest(app);

export const emotion = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    req.body;
    quickstart("happy").catch(() => {
      console.error("しっぱい!!!");
    });
    res.send("Hello from Firebase!");
  });
