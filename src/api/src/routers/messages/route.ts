import * as express from "express";

const router = express.Router();

const endPoint: string = "/messages";

router
  .route(endPoint)
  .get((req, res) => {
    res.json({ message: "GET method" });
  })
  .post((req, res) => {
    res.json({ message: "POST method" });
  });

router
  .route(`${endPoint}/:id`)
  .put((req, res) => {
    res.json({ message: `PUT method ID: ${req.params.id}` });
  })
  .delete((req, res) => {
    res.json({ message: `DELETE method ID: ${req.params.id}` });
  });

export { router };
