const express = require('express');

function routes(Service) {
  /*  "/api/services"
   *    GET: finds all services
   *    POST: creates a new service
   */
  const serviceRouter = express.Router();

  serviceRouter
    .route('/services')
    .get((req, res) => {
      Service.find({})
        .populate('supervisor')
        .exec((err, services) => {
          if (err) {
            return res.send(err);
          }

          return res.send(services);
        });
    })
    .post((req, res) => {
      const service = new Service(req.body);
      service.save();
      return res.status(201).json(service);
    });

  serviceRouter.use('/services/:serviceId', (req, res, next) => {
    Service.findById(req.params.serviceId, (err, service) => {
      if (err) {
        return handleError(res, err, 'Failed to get service Information');
      }
      if (service) {
        req.service = service;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  serviceRouter.route('/services/:serviceId').delete((req, res) => {
    req.service.remove(err => {
      if (err) {
        return handleError(res, err, 'Failed to remove service');
      }

      return res.sendStatus(204);
    });
  });

  return serviceRouter;
}

module.exports = routes;
