const express = require('express');

function routes(Supervisor) {
  /*  "/api/supervisors"
   *    GET: finds all supervisors
   *    POST: creates a new supervisor
   */
  const supervisorRouter = express.Router();

  supervisorRouter
    .route('/supervisors')
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

  supervisorRouter.use('/supervisors/:supervisorId', (req, res, next) => {
    Supervisor.findById(req.params.supervisorId, (err, supervisor) => {
      if (err) {
        return handleError(res, err, 'Failed to get supervisor Information');
      }
      if (supervisor) {
        req.supervisor = supervisor;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  supervisorRouter.route('/supervisors/:supervisorId').delete((req, res) => {
    req.supervisor.remove(err => {
      if (err) {
        return handleError(res, err, 'Failed to remove supervisor');
      }

      return res.sendStatus(204);
    });
  });

  return supervisorRouter;
}

module.exports = routes;
