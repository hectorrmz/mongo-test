const express = require("express");

function routes(Supervisor) {
  /*  "/api/supervisors"
   *    GET: finds all supervisors
   *    POST: creates a new supervisor
   */
  const supervisorRouter = express.Router();

  supervisorRouter
    .route("/supervisors")
    .get((req, res) => {
      Supervisor.find((err, supervisors) => {
        if (err) {
          return res.send(err);
        }

        return res.send(supervisors);
      });
    })
    .post((req, res) => {
      const supervisor = new Supervisor(req.body);
      supervisor.save();
      return res.status(201).json(supervisor);
    });

  return supervisorRouter;
}

module.exports = routes;
