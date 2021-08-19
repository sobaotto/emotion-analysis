import * as functions from "firebase-functions";
import { quickstart } from "./emotion-analysis";
import express = require("express");
import { analysisRouter, messagesRouter } from "./routers";

const app = express();
app.use("/", messagesRouter);
app.use("/", analysisRouter);

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
