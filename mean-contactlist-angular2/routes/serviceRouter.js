const express = require('express');

function routes(Service) {
  /*  "/api/services"
   *    GET: finds all services
   *    POST: creates a new service
   */
  const serviceRouter = express.Router();

  serviceRouter
    .route('/service')
    .get((req, res) => {
      Service.find((err, services) => {
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

  return serviceRouter;
}

module.exports = routes;
