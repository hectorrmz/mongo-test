const express = require('express');

function routes(Worker) {
  /*  "/api/workers"
   *    GET: finds all workers
   *    POST: creates a new worker
   */
  const workerRouter = express.Router();

  workerRouter
    .route('/workers')
    .get((req, res) => {
      Worker.find().exec((err, workers) => {
        if (err) {
          return res.send(err);
        }

        return res.send(workers);
      });
    })
    .post((req, res) => {
      const worker = new Worker(req.body);
      worker.save();
      return res.status(201).json(worker);
    });

  workerRouter.use('/workers/:workerId', (req, res, next) => {
    Worker.findById(req.params.workerId, (err, worker) => {
      if (err) {
        return handleError(res, err, 'Failed to get worker Information');
      }
      if (worker) {
        req.worker = worker;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  workerRouter.route('/workers/:workerId').delete((req, res) => {
    req.worker.remove(err => {
      if (err) {
        return handleError(res, err, 'Failed to remove worker');
      }

      return res.sendStatus(204);
    });
  });

  return workerRouter;
}

module.exports = routes;
